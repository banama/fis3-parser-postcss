var autoprefixer = require('autoprefixer')
fis
    .media('dev')
    .match('*.css', {
        parser: fis.plugin("postcss", {plugin: [
            autoprefixer
        ]})
    })

fis
    .set("project.ignore", [
        'fis-conf.js',
        'node_modules/**'
    ])
