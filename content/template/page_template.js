const pageTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
   <link rel="stylesheet" href="content/template/styles.css">
</head>
<body>
    <header>
        <h1>{{header}}</h1>
    </header>

    <div class="container">
        <div class="advice-section">
            <h2>{{advice_title}}</h2>
            <p>{{advice_text}}</p>
        </div>

        <div class="links-section">
            {{links_sections}}
        </div>
    </div>
</body>
</html>
`;
