<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    {{--  Meta  --}}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="api-host" content="{API_HOST}">

    <title>Timo Cuijpers | Portfolio</title>

    <!-- Beschrijving van de pagina -->
    <meta name="description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">

    <!-- Trefwoorden voor de pagina -->
    <meta name="keywords" content="Timo Cuijpers, Portfolio, Webdesign, Creatief Ontwerp, Grafisch Design">

    <!-- Open Graph / Facebook Meta Tags -->
    <meta property="og:title" content="Timo Cuijpers | Portfolio">
    <meta property="og:description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">
    <meta property="og:image" content="/img/MainBackground.jpg">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://timo.uit.best">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Timo Cuijpers | Portfolio">
    <meta name="twitter:description" content="Ontdek het portfolio van Timo Cuijpers. Blijf op de hoogte voor meer informatie en updates over creatieve ontwerpen en projecten.">
    <meta name="twitter:image" content="/img/MainBackground.jpg">

    {{--  Styles  --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">

    <link rel="icon" href="/img/TimoCutOut.png" />

    {{--  Scripts  --}}
    @vite('resources/css/app.css')

</head>
<body>
    <div id="app"></div>

    @vite('resources/js/app.js')
</body>
</html>
