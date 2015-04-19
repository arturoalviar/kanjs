module.exports = function(grunt){

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                'build/css/style.min.css': ['css/style.css']
                }
            }
        },
        'json-minify': {
            build: {
                files: 'data/jlpt.json'
            }
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            },
            my_target: {
                files: [{
                  'build/js/app.min.js': ['js/app.js']
              },
              {
                  'build/js/controllers.min.js': ['js/controllers.js']
              }
              ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-json-minify');

    grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'json-minify']);


};
