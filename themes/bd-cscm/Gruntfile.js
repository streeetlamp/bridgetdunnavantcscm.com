module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Grunt-sass
        sass: {
          app: {
            files: [{
              expand: true,
              cwd: 'static/scss',
              src: ['*.scss'],
              dest: 'static/css',
              ext: '.css'
            }]
          },
          options: {
            sourceMap: false,
            outputStyle: 'nested'
          }
        },

        watch: {
            scss: {
                files: ['static/scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
        },

        autoprefixer: {
            options: {
                map: false
            },
            dist: {
                files: {
                    'static/css/main.css' : 'static/css/main.css'
                }
            }
        },

        cmq: {
            target: {
                files: {
                    'static/css' : 'static/css/main.css'
                }
            }
        }

    });

    // 3. Where we tell Grunt what plugins to use

    // Sass
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // JS
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-concat');

    // File Watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('dev', ['watch']);
    //grunt.registerTask('build', ['sass', 'autoprefixer', 'cmq', 'cssmin', 'concat', 'uglify']);
    //grunt.registerTask('deploy', ['build', 'clean', 'copy', 'buildcontrol']);
};