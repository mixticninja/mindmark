document.addEventListener('DOMContentLoaded', () => {
    // Color properties are now removed and defined in style.css
    const container = document.getElementById('mindmap-container');
    let nodeIdCounter = 0;

    // Cache for computed colors to avoid excessive DOM manipulation
    const colorCache = {};
    function getColorForLevel(level) {
        if (colorCache[level]) {
            return colorCache[level];
        }
        // Create a temporary node to measure the computed color from CSS
        const tempNode = document.createElement('div');
        tempNode.style.display = 'none';
        tempNode.classList.add('node', `node-level-${level}`);
        document.body.appendChild(tempNode);
        const color = window.getComputedStyle(tempNode).backgroundColor;
        document.body.removeChild(tempNode);
        colorCache[level] = color;
        return color;
    }

    function createNodeElement(nodeData, level = 0, parentId = null) {
        const node = document.createElement('div');
        node.classList.add('node', `node-level-${level}`);

        const label = document.createElement('span');
        label.textContent = nodeData.label;
        node.appendChild(label);

        node.dataset.id = `node-${nodeIdCounter++}`;
        node.dataset.level = level;
        node.dataset.open = 'false';
        if (parentId) {
            node.dataset.parentId = parentId;
        }

        if (nodeData.link) {
            node.classList.add('node-link');
            const icon = document.createElement('span');
            icon.classList.add('link-icon');
            icon.textContent = '🔍'; // Set icon content directly
            node.appendChild(icon);
        } else if (nodeData.children && nodeData.children.length > 0) {
            node.dataset.hasChildren = 'true';
            const indicator = document.createElement('span');
            indicator.classList.add('node-indicator');
            const parentColor = getColorForLevel(level);
            indicator.style.borderColor = `transparent transparent transparent ${parentColor}`;
            node.appendChild(indicator);
        }

        node.addEventListener('click', (e) => {
            e.stopPropagation();
            if (nodeData.link) {
                openLinkModal(nodeData.link);
            } else if (nodeData.children) {
                toggleChildren(node, nodeData);
            }
        });

        return node;
    }

    function openLinkModal(url) {
        const pageId = url.split('/').pop().replace('.html', '');
        const pageData = linksData.pages.find(p => p.pageId === pageId);

        if (!pageData) {
            console.error('Page data not found for pageId:', pageId);
            return;
        }

        let linksHtml = '';
        if (pageData.links_sections) {
            pageData.links_sections.forEach(section => {
                linksHtml += '<ul>';
                if (section.sub_link_section_title) {
                    linksHtml += `<h4>${section.sub_link_section_title}</h4>`;
                }
                if (section.links) {
                    section.links.forEach(link => {
                        linksHtml += `<li><a href="${link.link}" target="_blank">${link.link_des}</a></li>`;
                    });
                }
                linksHtml += '</ul>';
            });
        }

        const renderedHtml = pageTemplate
            .replace('{{title}}', pageData.title)
            .replace('{{header}}', pageData.header)
            .replace('{{advice_title}}', pageData.advice_title || '')
            .replace('{{advice_text}}', pageData.advice_text || '')
            .replace('{{links_sections}}', linksHtml);

        const existingModal = document.getElementById('link-modal-overlay');
        if (existingModal) existingModal.remove();
 // Create Modal Overlay
        const overlay = document.createElement('div');
        overlay.id = 'link-modal-overlay';
  // Create Modal Content
        const content = document.createElement('div');
        content.classList.add('link-modal-content');
// Create Close Button
        const closeButton = document.createElement('button');
        closeButton.classList.add('link-modal-close');
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => overlay.remove();
 // Create Iframe
        const iframe = document.createElement('iframe');
        iframe.classList.add('link-modal-iframe');
        iframe.srcdoc = renderedHtml;
       // Assemble Modal
        content.appendChild(closeButton);
        content.appendChild(iframe);
        overlay.appendChild(content);

        document.body.appendChild(overlay);
    }

    function toggleChildren(parentNodeElement, nodeData) {
        if (!nodeData.children) return; // Do nothing if there are no children
        const wasOpen = parentNodeElement.dataset.open === 'true';
        const parentId = parentNodeElement.dataset.id;
        const parentLevel = parseInt(parentNodeElement.dataset.level);
        const childLevel = parentLevel + 1;

        parentNodeElement.dataset.open = wasOpen ? 'false' : 'true';
        parentNodeElement.classList.toggle('active');

        const indicator = parentNodeElement.querySelector('.node-indicator');
        if (indicator) {
            indicator.classList.toggle('open');
            if (!wasOpen) { // If opening
                const childColor = getColorForLevel(childLevel);
                indicator.style.borderColor = `transparent transparent transparent ${childColor}`;
            } else { // If closing
                const parentColor = getColorForLevel(parentLevel);
                indicator.style.borderColor = `transparent transparent transparent ${parentColor}`;
            }
        }

        if (wasOpen) {
            // --- CLOSE LOGIC ---
            closeBranch(parentId);
        } else if (nodeData.children && nodeData.children.length > 0) {
            // --- OPEN LOGIC ---
            let childContainer = document.querySelector(`.level-container[data-level='${childLevel}']`);
            if (!childContainer) {
                childContainer = document.createElement('div');
                childContainer.classList.add('level-container');
                childContainer.dataset.level = childLevel;
                container.appendChild(childContainer);
            }

            const childrenFragment = document.createDocumentFragment();
            nodeData.children.forEach(childData => {
                const childNode = createNodeElement(childData, childLevel, parentId);
                childrenFragment.appendChild(childNode);
            });
            
            // --- Correct Insertion Logic ---
            const parentSiblings = Array.from(parentNodeElement.parentElement.children);
            const parentIndex = parentSiblings.indexOf(parentNodeElement);
            let insertAfterElement = null;

            // Find the last child of the last open preceding sibling
            for (let i = parentIndex - 1; i >= 0; i--) {
                const prevSibling = parentSiblings[i];
                if (prevSibling.dataset.open === 'true') {
                    const prevSiblingChildren = document.querySelectorAll(`.node[data-parent-id='${prevSibling.dataset.id}']`);
                    if (prevSiblingChildren.length > 0) {
                        insertAfterElement = prevSiblingChildren[prevSiblingChildren.length - 1];
                        break;
                    }
                }
            }
            
            if (insertAfterElement) {
                insertAfterElement.after(childrenFragment);
            } else {
                childContainer.prepend(childrenFragment);
            }
        }

        drawLines();
    }

    function closeBranch(parentId) {
        const childrenToRemove = document.querySelectorAll(`.node[data-parent-id='${parentId}']`);
        if (childrenToRemove.length === 0) return;
        
        const childContainer = childrenToRemove[0].parentElement;

        childrenToRemove.forEach(child => {
            if (child.dataset.open === 'true') {
                closeBranch(child.dataset.id);
            }
            child.remove();
        });

        // If the container of the children is now empty, remove it
        if (childContainer && childContainer.children.length === 0) {
            childContainer.remove();
        }
    }

    function drawLines() {
        const svg = document.getElementById('mindmap-svg');
        if (!svg) return;
        svg.innerHTML = '';
        const openNodes = document.querySelectorAll(".node[data-open='true'][data-has-children='true']");

        openNodes.forEach(parentNode => {
            const parentId = parentNode.dataset.id;
            const children = document.querySelectorAll(`.node[data-parent-id='${parentId}']`);
            if (children.length > 0) {
                const childLevel = parseInt(children[0].dataset.level);
                const childColor = getColorForLevel(childLevel);
                children.forEach(childNode => {
                    drawCurve(parentNode, childNode, svg, childColor);
                });
            }
        });
    }

    function drawCurve(startElem, endElem, svg, color) {
        const containerRect = container.getBoundingClientRect();
        const startRect = startElem.getBoundingClientRect();
        const endRect = endElem.getBoundingClientRect();

        const indicatorWidth = 10; // As defined in CSS border-width
        const indicatorMargin = 5; // As defined in CSS margin-left
        const startOffset = indicatorWidth + indicatorMargin;

        const startX = startRect.right - containerRect.left + startOffset;
        const startY = startRect.top + startRect.height / 2 - containerRect.top;
        const endX = endRect.left - containerRect.left;
        const endY = endRect.top + endRect.height / 2 - containerRect.top;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${startX} ${startY} C ${startX + 60} ${startY}, ${endX - 60} ${endY}, ${endX} ${endY}`;
        path.setAttribute('d', d);
        path.setAttribute('stroke', color);
        svg.appendChild(path);
    }

    function initMindmap() {
        container.innerHTML = '<svg id="mindmap-svg"></svg>';
        const rootLevelContainer = document.createElement('div');
        rootLevelContainer.classList.add('level-container');
        rootLevelContainer.dataset.level = '0';
        const rootNode = createNodeElement(mindmapData, 0);
        rootLevelContainer.appendChild(rootNode);
        container.appendChild(rootLevelContainer);
    }

    initMindmap();
});
