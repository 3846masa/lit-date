module.exports = (config) => {
  config.set({
    logLevel: config.LOG_ERROR,

    concurrency: 1,

    browsers: ['Firefox', 'Chrome'],

    files: [{ pattern: 'src/*.bench.js', watched: false }, { pattern: 'src/**/*.bench.js', watched: false }],

    frameworks: ['benchmark'],

    preprocessors: {
      'src/*.bench.js': ['webpack'],
      'src/**/*.bench.js': ['webpack'],
    },

    webpack: {
      externals: {
        benchmark: 'Benchmark',
        'beautify-benchmark': 'beautifyBenchmark',
      },
    },

    webpackMiddleware: {
      stats: 'errors-only',
    },

    reporters: ['benchmark'],

    plugins: [
      'karma-*',
      require('./karma/karma-beautify-benchmark'),
      require('./karma/karma-beautify-benchmark-reporter'),
    ],

    singleRun: true,

    benchmarkReporter: {
      terminalWidth: 80,
      showBrowser: true,
      showSuiteSummary: true,
    },
  });
};
