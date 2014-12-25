/**
 *
 * Created by yonglongwyl on 14-12-24.
 */

module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n',
                separator: ';'
            },
            build: {
                src: ['public/js/jquery.js', 'public/js/jquery.pjax.js', 'public/js/jquery.scrollUp.js', 'public/js/bootstrap.js','public/js/prettify/prettify.js', 'public/js/base.js'],
                dest: 'public/js/site.min.js'
            }
        },
        cssmin: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
            },
            minify: {
                expend: true,
                src: ['public/css/bootstrap.css', 'public/css/font-awesome.css','public/css/highlight.css', 'public/js/prettify/prettify.css', 'public/css/base.css', 'public/css/custom.css'],
                dest: 'public/css/site.min.css'
            }
        },

        // https://github.com/dannygarcia/grunt-jekyll
        // https://www.npmjs.com/package/grunt-jekyll


        // jekyll node version : https://github.com/flatiron/blacksmith

        jekyll: {                             // Task
            serve: {                          // Universal options
                options: {
                    serve: true,
                    watch: true,
                    port: 4000
                }
            },
            build: {
                options: {
                    dest: '_site'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('serve', ['jekyll:serve']);
    grunt.registerTask('build', ['uglify', 'cssmin', 'jekyll:build']);
};
