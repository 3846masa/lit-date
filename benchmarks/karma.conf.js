const usePoltly = !!(process.env.PLOTLY_USERNAME && process.env.PLOTLY_APIKEY);

module.exports = (config) => {
  config.set({
    logLevel: config.LOG_ERROR,
    concurrency: 1,
    browsers: ['Firefox', 'Chrome'],

    files: [{ pattern: 'src/*.bench.js', watched: false }, { pattern: 'src/**/*.bench.js', watched: false }],
    preprocessors: {
      'src/*.bench.js': ['webpack'],
      'src/**/*.bench.js': ['webpack'],
    },
    webpack: {
      externals: {
        benchmark: 'Benchmark',
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },

    frameworks: ['benchmark'],
    reporters: usePoltly ? ['benchmark', 'benchmark-plotly'] : ['benchmark'],
    plugins: ['karma-*'],
    singleRun: true,

    benchmarkReporter: {
      showSuiteSummary: true,
      formatSuiteHeading: (suiteName, browser, { style }) => {
        return `\n${style.suite(suiteName)} ${style.browser(`[${browser}]`)}\n`;
      },
    },
    benchmarkPlotlyReporter: {
      username: process.env.PLOTLY_USERNAME,
      apiKey: process.env.PLOTLY_APIKEY,
      makeFigure: (results) => {
        const typeList = [
          { suite: 'Basic usage', browser: 'Chrome' },
          { suite: 'Advanced usage', browser: 'Chrome' },
          { suite: 'Basic usage', browser: 'Firefox' },
          { suite: 'Advanced usage', browser: 'Firefox' },
        ];
        return typeList
          .map((type) => results.filter((r) => r.suite === type.suite && r.browser.includes(type.browser)))
          .map((results) => makeFigureDflt(results));
      },
      cloudFilename: [
        'lit-date_basic_chrome',
        'lit-date_advanced_chrome',
        'lit-date_basic_firefox',
        'lit-date_advanced_firefox',
      ],
      imageFilename: [null, null, null, null],
    },
  });
};

function makeFigureDflt(results) {
  const trace = {
    type: 'bar',
    orientation: 'h',
    hoverinfo: 'x+text',
    x: results.map((r) => r.hz),
    y: results.map((r) => [r.suite, r.name].join('<br>')),
    text: results.map((r) => [`Suite: ${r.suite}`, `Run: ${r.name}`, `Browser: ${r.browser}`].join('<br>')),
    marker: {
      color: results.map((r) => (r.name === 'lit-date' ? '#1565c0' : '#616161')),
    },
    error_x: {
      array: results.map((r) => r.hzDeviation),
    },
  };

  const longestLabel = Math.max(...results.map((r) => Math.max(r.suite.length, r.name.length)));

  return {
    data: [trace],
    layout: {
      margin: {
        l: 100 + 4 * longestLabel,
      },
      yaxis: {
        autorange: 'reversed',
        ticks: 'outside',
        ticklen: 8,
        tickcolor: 'rgba(0,0,0,0)',
      },
      xaxis: {
        title: 'Operations per second',
      },
    },
  };
}
