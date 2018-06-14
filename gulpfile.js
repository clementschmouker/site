

var elixir = require('laravel-elixir')

elixir((mix) => {
    mix
        // sass
        .sass('app.scss')

        // js
        .browserify('main.js', 'public/js/main.js')

        // copy files
        .copy('resources/assets/img', 'public/img')
        .copy('resources/assets/videos', 'public/videos')
})