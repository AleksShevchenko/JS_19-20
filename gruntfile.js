module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';\n',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dest/js/script.main.js'
      }
    },
     uglify:{
      dist: {
        src: ['dest/js/script.main.js'],
        dest: 'dest/js/script.main.min.js'
      }

     },

     cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dest/css/main.min.css': ['src/css/reset.css', 'src/css/style.css']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'src/css',
          ext: '.css'
        }]
      }
  },

   watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here 
        files: ['styles/*.scss'],
        tasks: ['sass'],
      }
   }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
  // grunt.registerTask('dev', ['concat']);


};