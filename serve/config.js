{
	express: {
      all: {
        options: {
          port: 9000,
          bases: ["app"],
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },
    watch: {
      src: {
        files: ['src/**/*', 'bower_components/**/*'],
        tasks: ['copy:stage', "do-setup", "do-validate", "do-build", "copy:publish"]
      }
    }
}