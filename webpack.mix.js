const { mix } = require('laravel-mix');

mix.js([
        'resources/assets/js/app.js'
    ], 'public/js')
    .styles([
        'node_modules/normalize.css/normalize.css'
    ], 'public/css/normalize.css')
    .sass('resources/assets/scss/app.scss', 'public/css')
    .copyDirectory('resources/assets/img', 'public/img');
