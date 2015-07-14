{
	compress: {
		dist: {
			options: {
				mode: "tgz",
				archive: 'dist/<%= pkg.name %>.tar.gz'
			},
			files: [{
				expand: true,
				src: ['**/*'],
				cwd: "app",
				dest: '',
			}]
		}
	}
}