import path from 'path';
import globby from 'globby';

(async () => {
  const rootDir = path.resolve(__dirname, '..');
  const files = await globby(['src/*.bench.js', 'src/**/*.bench.js'], { cwd: rootDir, absolute: true });
  for (const file of files) {
    await import(file).then((module) => module.default);
  }
})().catch(console.error);
