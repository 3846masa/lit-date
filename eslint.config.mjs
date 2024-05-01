import { configs as sharedConfigs } from '@3846masa/configs/eslint/config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const configs = [
  {
    ignores: ['/lib', '/coverage', '/benchmarks'],
  },
  ...sharedConfigs,
];

export default configs;
