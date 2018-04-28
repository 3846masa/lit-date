import zlib from 'zlib';
import resolve from 'resolve';
import rollup from 'rollup';
import resolvePlugin from 'rollup-plugin-node-resolve';
import commonjsPlugin from 'rollup-plugin-commonjs';
import uglifyPlugin from 'rollup-plugin-uglify-es';

/** @return {string} */
const humanize = (n) => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

/** @param {string} modulename */
async function build(modulename) {
  // create a bundle
  const bundle = await rollup.rollup({
    input: `./scripts/${modulename}.js`,
    plugins: [resolvePlugin(), commonjsPlugin(), uglifyPlugin()],
    onwarn: () => {},
  });
  const { code } = await bundle.generate({
    format: 'iife',
  });
  const gzipped = zlib.gzipSync(code);
  await bundle.write({
    format: 'iife',
    file: `./dist/${modulename}.js`,
  });

  return {
    name: modulename,
    size: Buffer.from(code, 'utf-8').byteLength,
    gzipped: gzipped.byteLength,
  };
}

Promise.all(['moment', 'luxon', 'fecha', 'date-fns', 'dayjs', 'dateformat', 'time-stamp', 'fdate'].map(build))
  .then((results) => results.sort((a, b) => b.size - a.size))
  .then((results) =>
    results.map((result) => ({
      ...result,
      size: humanize(result.size),
      gzipped: humanize(result.gzipped),
    })),
  )
  .then((results) => {
    const maxLen = {
      name: Math.max(...results.map((r) => r.name.length)),
      size: Math.max(...results.map((r) => r.size.length)),
      gzipped: Math.max(...results.map((r) => r.gzipped.length)),
    };
    for (const { name, size, gzipped } of results) {
      console.log(
        [
          `${name.padEnd(maxLen.name)} |`,
          `${size.padStart(maxLen.size)} bytes`,
          `(gzip: ${gzipped.padStart(maxLen.gzipped)} bytes)`,
        ].join('\x20'),
      );
    }
  })
  .catch(console.error);
