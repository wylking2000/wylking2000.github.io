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
                banner: '/*<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n',
                separator: ';'
            },
            build: {
                src: ['public/js/jquery.js', 'public/js/jquery.pjax.js', 'public/js/jquery.scrollUp.js', 'public/js/bootstrap.js','public/js/prettify/prettify.js', 'public/js/base.js'],
                dest: 'public/js/site.min.js'
            }
        },
        cssmin: {
            options: {
                banner: '/*<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
            },
            minify: {
                expend: true,
                src: ['public/css/bootstrap.css', 'public/css/font-awesome.css','public/css/highlight.css', 'public/js/prettify/prettify.css', 'public/css/base.css', 'public/css/custom.css'],
                dest: 'public/css/site.min.css'
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 默认任务
    grunt.registerTask('default', ['uglify', 'cssmin']);

    /*grunt.initConfig({
        jekyll: {                             // Task
            options: {                          // Universal options
                bundleExec: true,
                src : '.'
            },
            dist: {                             // Target
                options: {                        // Target options
                    dest: '_site',
                    config: '_config.yml,_config.build.yml'
                }
            },
            serve: {                            // Another target
                options: {
                    dest: '_site',
                    drafts: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['jekyll']);*/
};
