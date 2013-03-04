module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-htmlcompressor');

grunt.initConfig({
  htmlcompressor: {
    compile: {
      files: {
        '../build/index.html': 'index.html',
        '../build/terms.html': 'terms.html'
      },
      options: {
        type: 'html',
        preserveServerScript: true
      }
    }
  }
});

// Default task(s).
grunt.registerTask('default', ['htmlcompressor:compile']);

};