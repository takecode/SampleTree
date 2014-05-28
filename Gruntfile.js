'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        options: {
          livereload: true
        },
        files: [
          'app/js/**/*.js',
          'app/html/**/*.html',
          'app/css/**/*.css'
        ]
      },
      karma: {
        files: ['app/js/**/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'karma.conf.js',
        'app/js/**/*.js',
        'test/**/*.js'
      ]
    },
    connect: {
      server: {
        options: {
          port: 8888,
          hostname: '*',
          base: './app/'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);
};
