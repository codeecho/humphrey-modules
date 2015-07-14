{
	htmlmin: {
		dist: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: [{
				expand: true,
				cwd: "build/stage/",
				src: "**/*.html",
				dest: "build/stage/"
			}]
		}
	}
}