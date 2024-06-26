<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    {{--  Meta  --}}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="api-host" content="{API_HOST}">

    <title>Timo Cuijpers | Portfolio</title>

    <!-- Meta tag voor responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="dark" />

    <!-- Beschrijving van de pagina -->
    <meta name="title" content="Timo Cuijpers">
    <meta name="description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">

    <!-- Trefwoorden voor de pagina -->
    <meta name="keywords" content="Timo Cuijpers, Portfolio, Portfolio Timo Cuijpers, Portfolio Timo, Timo Portfolio, Timo Cuijpers Portfolio, Webdesign, Webdevelopment">

    <!-- Open Graph / Facebook Meta Tags -->
    <meta property="og:site_name" content="Timo Cuijpers" />
    <meta property="og:title" content="Timo Cuijpers | Portfolio">
    <meta property="og:description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">
    <meta property="og:image" content="https://timo.uit.best/img/Timo.jpeg">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://timo.uit.best">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Timo Cuijpers | Portfolio">
    <meta name="twitter:description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">
    <meta name="twitter:image" content="https://timo.uit.best/img/Timo.jpeg">
    <meta name="twitter:maxage" content="86400" />

    {{--  Styles  --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/Favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/Favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/Favicon/favicon-16x16.png">
    <link rel="manifest" href="/img/Favicon/site.webmanifest">

    {{--  Scripts  --}}
    @vite('resources/css/app.css')

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Timo Cuijpers",
            "alternateName": ["Timo", "Timo Cuijpers Portfolio"],
            "url": "https://timo.uit.best",
        }
    </script>
</head>
<body>
    <div id="app"></div>

    @vite('resources/js/app.js')
</body>
</html>
