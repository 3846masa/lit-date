import Benchmark from 'benchmark';
import logger from 'beautify-benchmark';
import chalk from 'chalk';

export default function createBenchmark(name, tasks) {
  return new Promise((resolve) => {
    const suite = new Benchmark.Suite(name, {
      onStart() {
        if (typeof window === 'undefined') {
          console.info(`${chalk.blue(this.name)} | ${chalk.green(`Node.js ${process.version}`)}`);
        }
      },
      onCycle(ev) {
        logger.add(ev.target);
      },
      onComplete() {
        logger.log();
        resolve();
      },
    });

    for (const taskName of Object.keys(tasks)) {
      suite.add(taskName, tasks[taskName]);
    }
    suite.run({ async: true });
  });
}
