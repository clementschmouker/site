

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

    	// versioning
    	.version([
            'public/css/style.css',
            'public/css/admin.css',
            'public/js/all.js',
            'public/js/admin.js'
        ])

        // sync
        .browserSync({
            files: [
                'public/*',
                'resources/*',
            ],
            open: false,
            logPrefix: 'todo',
            proxy: 'todo.loc',
            notify: false
        });
})