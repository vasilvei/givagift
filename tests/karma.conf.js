module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
          '../www/lib/ionic/js/ionic.bundle.js',
          '../www/js/**/*.js',
          '../www/lib/angular-mocks/angular-mocks.js',
          '**/*.test.js'
        ],
        exclude: [
        ],
        preprocessors: {
          '../www/js/*/**/*.js': 'coverage',
          '**/*.test.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
          type: 'html',
          dir: '../coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    })
  }
