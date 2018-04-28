/** @type {*} */
const w = window;

const suiteList = [];

w.Benchmark.Suite = new Proxy(w.Benchmark.Suite, {
  construct(target, arguments) {
    return new Proxy(new target(...arguments), {
      get(target, key, receiver) {
        if (key === 'run') {
          return () => suiteList.push(target);
        }
        return Reflect.get(target, key, receiver);
      },
    });
  },
});

let suite = null;

w.__karma__.start = () => {
  suite = suiteList.shift().run({ async: true });
};

w.beautifyBenchmark = {
  add(target) {
    w.__karma__.result({
      id: target.id,
      description: '',
      suite: [],
      log: [],
      success: true,
      skipped: false,
      benchmark: Object.assign(target, { suiteName: suite.name }),
    });
  },
  log() {
    if (suiteList.length === 0) {
      w.__karma__.complete({
        coverage: w.__coverage__,
      });
    } else {
      suite = suiteList.shift().run({ async: true });
    }
  },
};
