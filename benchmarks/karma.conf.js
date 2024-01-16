const usePoltly = !!(process.env.PLOTLY_USERNAME && process.env.PLOTLY_APIKEY);

module.exports = (config) => {
  config.set({
    benchmarkPlotlyReporter: {
      apiKey: process.env.PLOTLY_APIKEY,
      cloudFilename: [
        'lit-date_basic_chrome',
        'lit-date_advanced_chrome',
        'lit-date_basic_firefox',
        'lit-date_advanced_firefox',
      ],
      imageFilename: [null, null, null, null],
      makeFigure: (results) => {
        const typeList = [
          { browser: 'Chrome', suite: 'Basic usage' },
          { browser: 'Chrome', suite: 'Advanced usage' },
          { browser: 'Firefox', suite: 'Basic usage' },
          { browser: 'Firefox', suite: 'Advanced usage' },
        ];
        return typeList
          .map((type) => results.filter((r) => r.suite === type.suite && r.browser.includes(type.browser)))
          .map((results) => makeFigureDflt(results));
      },
      username: process.env.PLOTLY_USERNAME,
    },
    benchmarkReporter: {
      formatSuiteHeading: (suiteName, browser, { style }) => {
        return `\n${style.suite(suiteName)} ${style.browser(`[${browser}]`)}\n`;
      },
      showSuiteSummary: true,
    },
    browsers: ['FirefoxHeadless', 'ChromeHeadless'],

    concurrency: 1,
    files: [
      { pattern: 'src/*.bench.js', watched: false },
      { pattern: 'src/**/*.bench.js', watched: false },
    ],
    frameworks: ['benchmark'],
    logLevel: config.LOG_ERROR,

    plugins: [
      'karma-benchmark-plotly-reporter',
      'karma-benchmark',
      'karma-benchmarkjs-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-webpack',
    ],
    preprocessors: {
      'src/*.bench.js': ['webpack'],
      'src/**/*.bench.js': ['webpack'],
    },
    reporters: usePoltly ? ['benchmark', 'benchmark-plotly'] : ['benchmark'],
    singleRun: true,

    webpack: {
      devtool: 'source-map',
      externals: {
        benchmark: 'Benchmark',
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },
  });
};

function makeFigureDflt(results) {
  const trace = {
    error_x: {
      array: results.map((r) => r.hzDeviation),
    },
    hoverinfo: 'x+text',
    marker: {
      color: results.map((r) => (r.name === 'lit-date' ? '#1565c0' : '#616161')),
    },
    orientation: 'h',
    text: results.map((r) => [`Suite: ${r.suite}`, `Run: ${r.name}`, `Browser: ${r.browser}`].join('<br>')),
    type: 'bar',
    x: results.map((r) => r.hz),
    y: results.map((r) => [r.suite, r.name].join('<br>')),
  };

  const longestLabel = Math.max(...results.map((r) => Math.max(r.suite.length, r.name.length)));

  return {
    data: [trace],
    layout: {
      margin: {
        l: 100 + 4 * longestLabel,
      },
      xaxis: {
        title: 'Operations per second',
      },
      yaxis: {
        autorange: 'reversed',
        tickcolor: 'rgba(0,0,0,0)',
        ticklen: 8,
        ticks: 'outside',
      },
    },
  };
}
