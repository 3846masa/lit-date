import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import gzip from 'rollup-plugin-gzip';

const licenseComment = `
/*!
 * Copyright (c) 2018 3846masa
 * Released under the MIT license
 * https://3846masa.mit-license.org
 */
`.trim();

const defaultOpts = {
  input: './lib/index.mjs',
  output: {
    name: 'fdate',
    sourcemap: true,
  },
  plugins: [resolve()],
};

export default [
  {
    input: defaultOpts.input,
    output: {
      ...defaultOpts.output,
      file: './lib/index.js',
      format: 'cjs',
    },
    plugins: [...defaultOpts.plugins],
  },
  {
    input: defaultOpts.input,
    output: {
      ...defaultOpts.output,
      file: './dist/index.min.js',
      format: 'umd',
      banner: licenseComment,
    },
    plugins: [
      ...defaultOpts.plugins,
      terser({
        output: { comments: /^!/ },
      }),
      gzip(),
    ],
  },
];
