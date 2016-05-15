var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['test/test_index.js'],
    exclude: [],
    preprocessors: {'test/test_index.js': ['webpack']},
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            loader: 'istanbul-instrumenter'
          },
        ],
        loaders: [{ test: /\.css$/, loader: 'style!css' }]
      },
    },
    webpackServer: { noInfo: true },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
