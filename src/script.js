document.addEventListener('DOMContentLoaded', () => {
    // Color properties are now removed and defined in style.css
    const mindmapData = {
        label: "Stratégies de Recherche d'Emploi dans le Numérique",
        children: [
            {
                label: "Le Marché de l'Emploi IT (2024-2025)",
                children: [
                    {
                        label: "Tendances Générales",
                        children: [
                            { label: "Forte Baisse des Offres (-18% en 2024-2025)" },
                            { label: "Retour au Niveau d'Avant Covid (Post-Accélération)" },
                            { label: "Recherche de Candidats Plus Qualifiés/Expérimentés" },
                            { label: "Forte Évolution due à l'IA et la Cybersécurité" },
                            {label: "Offres", link:"content/offres.html" }
                        ]
                    },
                    {
                        label: "Difficultés Spécifiques",
                        children: [
                            { label: "Alternance: Fortement Réduite (-20% de signatures)" },
                            { label: "Compétition Internationale (Inde, Ukraine)" },
                            { label: "Sourcing Moins Prévisionnel (Moins de 'Pipeline')" },
                            { label: "No Code Impacte Postes (Surtout Front)" }
                        ]
                    },
                    {
                        label: "Métiers Demandés (Selon Expérience)",
                        children: [
                            {
                                label: "Profils Juniors (0-3 ans)",
                                children: [
                                    { label: " Technicien Support (Porte d'entrée)" },
                                    { label: "Petites Entreprises (Alternance/Emploi)" }
                                ]
                            },
                            {
                                label: "Profils Intermédiaires/Seniors",
                                children: [
                                    { label: "Développeur (Niveau Intermédiaire)" },
                                    { label: "Consultants (Postes très demandés)" },
                                    { label: "Chef de Projet" },
                                    { label: "Cybersécurité (Profils Experts)" }
                                ]
                            },
                            {
                                label: "Spécificités Locales (Toulouse)",
                                children: [
                                    { label: "Secteur Industriel (Airbus, Aéronautique)" },
                                    { label: "Développement Back End Privilégié (vs Front End)" }
                                ]
                            },
                            {
                                label: "Les métiers",
                                link: "content/metier.html"
                            }
                        ]
                    },
                     {
                        label: "Attentes du marché",
                        link: "content/marche.html"
                    }
                ]
            },
            {
                label: "L'Écosystème Numérique (Réseau)",
                children: [
                    {
                        label: "Acteurs Clés (Partenaires)",
                        children: [
                            {
                                label: "La Mêlée (Réseau Associatif du Numérique)",
                                children: [
                                    { label: "Facilite les Rencontres (350+ événements/an)" },
                                    { label: "Festival de la Mélée Numérique (9800 pers.)" },
                                    { label: "Favorise la Cooptation" }

                                ]
                            },
                            {
                                label: "Numéum (Syndicat des Entreprises du Numérique)",
                                children: [
                                    { label: "Représente la Filière" },
                                    { label: "Entretiens Numèric Emploi (Conseil CV/Parcours)" }
                                ]
                            },
                            {
                                label: "Digital 113 (Cluster / Annuaire IA)",
                                children: [
                                    { label: "Réseau Entreprises (300+ adhérents)" },
                                    { label: "Factories (Groupes de travaill thématiques)" },
                                    { label: "Annuaire IA" }

                                ]
                            },
                            {
                                label: "CyberOcc (Centre Régional de Cybersécurité)",
                                children: [
                                    { label: "Accompagnement et Ressources Pédagogiques" },
                                    { label: "Service d'Urgence Cyber (Hotline)" },
                                    { label: "MOOC ANSSI recommandé" }

                                ]

                            },
                            {
                                label: "ATLAS (OPCO/Alternance)",
                                children: [
                                    { label: "Financeur de la Formation/Alternance" },
                                    { label: "Collecteur de Données Marché" }
                                ]
                            },
                             {
                                label: "Développer mon réseau",
                                link: "content/reseau.html"
                            }
                        ]

                    },
                    {
                        label: "Écosystèmes Start-up (Villages)",
                        children: [
                            { label: "French Tech/loT Valley / Village by CA / La Cité / At Home" },
                            { label: "Ouverture d'Esprit/Recrutement Moins Frileux" },
                            { label: "Bonne source pour Annuaire d'Entreprises" },
                            { label: "Exemples: Careo, Orbital, Bleu 122 (Dev/Front)" }
                        ]

                    },
                   {
                        label: "Partenaires pour l'Emploi",
                        children: [
                            { label: "France Travail / APEC / Cap Emploi / Mission Locale" }
                        ]

                    },
                    {
                        label: "Annuaires entreprises",
                        link:"content/annuaire.html"

                    }  
                ]
            },
            {
                label: "Conseils et Actions de Candidature",
                children: [
                    {
                        label: "Optimisation du CV et Profil",
                        children: [
                            { label: "Adapter CV aux Métiers Ciblés (Mots-clés)" },
                            { label: "Mettre en Avant Compétences en Cybersécurité (Transversale)" },
                            { label: "Développer Polyvalence (Élargir Compétences)" },
                            {
                                label: "Formation en ligne",
                                link: "content/foad.html"

                            },
                            { label: "Format CV type ESN (Expérience, Missions, Environnement Tech)" },
                            { label: "Importance des Réalisations (Projets personnels, Github)" },
                             {
                                label: "Partager mes projets",
                                link: "content/projets.html"

                            }  
                        ]
                    },
                    {
                        label: "Stratégies Proactives (Marché Caché)",
                        children: [
                            { label: "Le Réseau est le 'Nerf de la Guerre (80% des recrutements)'" },
                            { label: "Participer aux Événements/Salons (Meetup, Defest, Afterworks)" },
                            { label: "Candidatures Spontanées (via Annuaires des Partenaires)" },
                            { label: "Veille Economique (Levées de Fonds, Evolution du secteur)" },
                            { label: "Enquêtes Professionnelles (Connaître le Contexte Entreprise)" }
                        ]
                    },
                    {
                        label: "Visibilité et Outils",
                        children: [
                            {
                                label: "Linkedin (95% des recruteurs consultent avant entretien)",
                                children: [
                                    { label: "Mettre en avant Certifications/Technos" },
                                    { label: "Entretenir le Réseau (Ajouter les contacts)" }
                                ]
                            },
                            { label: "Sites Spécialisés (Welcome to the Jungle, Digital Skills)" },
                            { label: "Activer la Promotion de Profil (France Travail)" }
                        ]
                    },
                    {
                        label: "Ouverture de Voies",
                        children: [
                            { label: " Vérifier les pages Carrière d'Entreprises (Marché Ouvert)" },
                            { label: "Cibler les Entreprises 'Hors Numérique (MSA, Banques, Assurances)" },
                            { label: "Considérer le Portage Salarial" }
                        ]
                    },
                    {
                                label: "Formation en centre",
                                link: "content/formation.html"

                    },
                    {
                                label: "Liens utiles",
                                link: "content/debreef.html"

                    } 
                ]
            }
        ]
    };

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
        // Remove existing modal if any
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
        iframe.src = url;

        // Assemble Modal
        content.appendChild(closeButton);
        content.appendChild(iframe);
        overlay.appendChild(content);

        // Append to body
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
