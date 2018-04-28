const logger = require('beautify-benchmark');
const chalk = require('chalk');

const BenchReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  let prevSuiteName = '';

  this.specSuccess = (browser, result) => {
    const benchmark = result.benchmark;
    if (prevSuiteName !== benchmark.suiteName) {
      if (prevSuiteName) {
        logger.log();
      }
      console.log(`${chalk.blue(benchmark.suiteName)} | ${chalk.green(browser.name)}`);
    }
    logger.add(result.benchmark);
    prevSuiteName = benchmark.suiteName;
  };

  this.onRunComplete = (browser) => {
    logger.log();
  };
};

BenchReporter.$inject = ['baseReporterDecorator'];

module.exports = {
  'reporter:benchmark': ['type', BenchReporter],
};
