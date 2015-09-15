module.exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^(app)/,
        'vendor.js': /^(vendor|bower_components)/
      },
	  order: {
		before: [
			"bower_components/react/react-with-addons.js"
		]
	  }
    },
	stylesheets: {
		joinTo: 'app.css'
	}
  },
  plugins: {
    babel: {
      pattern: /\.(js|jsx)$/
    },
	digest: {
		prependHost: {production: '//changeme.cloudfront.com/'},
	}
  }
}
