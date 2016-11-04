/* ======================================================= 
  Cherio Media Grunt Script ver. 1.1
  Created: November 08, 2013
  Updated: April 19, 2014
  Author: Louis Dalligos (http://github.com/louisdalligos) 
========================================================== */

'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var cherioConfig = {
    src: 'src',
    build: 'build'
  };

  grunt.initConfig({
    cherio: cherioConfig,
    watch: {
      compass: {
        files: ['<%= cherio.src %>/sass/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= cherio.src %>/templates/**/*.hbs',
          '<%= cherio.src %>/css/**/*.css',
          '<%= cherio.src %>/js/**/*.js',
          '<%= cherio.src %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['assemble']
      }
    },
    connect: {
      options: {
        port: 3000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, cherioConfig.src)
            ];
          }
        }
      },
      build: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, cherioConfig.build)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= cherio.src %>/js/**/*.js',
        '!<%= cherio.src %>/js/vendor/*'
      ]
    },
    compass: {
      options: {
        httpPath: '/',
        sassDir: '<%= cherio.src %>/sass',
        cssDir: '<%= cherio.src %>/css',
        imagesDir: '<%= cherio.src %>/images',
        javascriptsDir: '<%= cherio.src %>/js',
        fontsDir: '<%= cherio.src %>/fonts',
        environment: 'production',
        outputStyle: 'expanded',
        noLineComments: false,
        boring: false,
        relativeAssets: true,
        raw: 'preferred_syntax = :sass\n'
      },
      server: {
        options: {
          debugInfo: false
        }
      }
    },
    concat: {
      build: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['<%= cherio.src %>/js/**/*.js'],
          dest: '<%= cherio.build %>/js/application.js',
        },
      }
    },
    assemble: {
      options: {
        flatten: true,
        layout: '<%= cherio.src %>/templates/layouts/default.hbs',
        partials: '<%= cherio.src %>/templates/partials/*.hbs'
      },
      pages: {
        files: {
          '<%= cherio.src %>/': ['<%= cherio.src %>/templates/pages/*.hbs', '!<%= cherio.src %>/templates/pages/index.hbs']
        }
      },
      index: {
        files: {
          '<%= cherio.src %>/': ['<%= cherio.src %>/templates/pages/index.hbs']
        }
      }
    },
    imagemin: {
      options: {
        cache: false
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= cherio.src %>/images',
          src: '**/*.{png,jpg,jpeg}',
          dest: '<%= cherio.build %>/images'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= cherio.build %>/css/',
        src: ['<%= cherio.src %>/*.css', '!*.min.css'],
        dest: '<%= cherio.build %>/css/',
        ext: '.min.css'
      }
    },
    htmlmin: {
      build: {
        options: {
        // removeCommentsFromCDATA: true,
        // https://github.com/cherio/grunt-usemin/issues/44
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= cherio.src %>',
          src: '*.html',
          dest: '<%= cherio.build %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= cherio.src %>',
          dest: '<%= cherio.build %>',
          src: [
            '*.html',
            '*.{ico,png,txt}',
            '.htaccess',
            'images/**/*',
            'css/**/*',
            'js/**/*',
            'fonts/**/*'
          ]
        }]
      }
    },
    concurrent: {
      server: [
        'compass'
      ],
      build: [
        'compass',
        'imagemin',
        'htmlmin',
        'cssmin',
        'concat'
      ]
    }
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('serve', function (target) {
    if (target === 'build') {
      return grunt.task.run(['build', 'open', 'connect:build:keepalive']);
    }

    grunt.task.run([
      'concurrent:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'assemble',
    'concurrent:build',
    'concat:build',
    'cssmin',
    'copy:build'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
