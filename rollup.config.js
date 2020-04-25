import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const licenseComment = `
/*!
 * Copyright (c) 2018 3846masa
 * Released under the MIT license
 * https://3846masa.mit-license.org
 */
`.trim();

const defaultOpts = {
  input: './src/index.ts',
  output: {
    name: 'litdate',
    sourcemap: true,
    banner: licenseComment,
  },
  plugins: [
    typescript(),
    terser({
      output: { comments: /^!/ },
    }),
  ],
};

export default [
  {
    input: defaultOpts.input,
    output: {
      ...defaultOpts.output,
      file: './lib/index.mjs',
      format: 'esm',
    },
    plugins: [...defaultOpts.plugins],
  },
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
      file: './lib/index.umd.js',
      format: 'umd',
    },
    plugins: [...defaultOpts.plugins],
  },
];
