/**
 * Sugar7 Developer Gruntfile
 *
 * @author Stuart Fyfe
 */
module.exports = function(grunt) {
    grunt.initConfig({
        fixpermsUser: 'www-data',
        fixpermsGroup: 'developers',
        cacheDir: 'cache',
        modulesDir: 'custom/modules',
        clean: {
            cache: {
                src: [
                    '<%= cacheDir %>/javascript/base/**',
                    '<%= cacheDir %>/api/**',
                    '<%= cacheDir %>/modules/**',
                ]
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                '<%= modulesDir %>/*/clients/**/{,*/}*.js'
            ],
            ignore_views: {
                options: {
                    '-W030': true,
                    '-W033': true
                },
                src: [
                    'Gruntfile.js',
                    '<%= modulesDir %>/*/clients/**/{,*/}*.js'
                ]
            }
        },
        watch: {
            cache: {
                files: '<%= modulesDir %>/**/clients/**/*.js',
                tasks: ['fixperms', 'clear']
            },
        },
        shell: {
            fixperms: {
                command: [
                    'sudo chown -R <%= fixpermsUser %>:<%= fixpermsGroup %> .',
                    'sudo chmod -R g-s .',
                    'sudo chmod -R o-w .',
                    'sudo chmod -R g+rw,o+r .',
                    'sudo chmod -R +X .'
                ].join(';')
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 1
            },
        },
        notify: {
            watch: {
                options: {
                    title: 'Tasks complete!',
                    message: 'Lint free and cache is clean!'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('fixperms', ['shell:fixperms']);
    grunt.registerTask('clear', ['fixperms', 'jshint:ignore_views', 'clean:cache', 'notify:watch']);

    grunt.task.run('notify_hooks');
};
