import path from 'path';
import fs from 'fs-extra';
import globby from 'globby';
import webpack from 'webpack';
import humanize from 'humanize';
import config from './webpack.config';

const compiler = webpack(config);
compiler.run(async () => {
  const rootDir = path.resolve(__dirname, '..');
  const files = await globby(['tmp/dist/*.js'], { cwd: rootDir, absolute: true });

  const results = [];
  for (const file of files) {
    const libraryName = path.basename(file, '.js');
    const fileSize = (await fs.stat(file)).size;
    const gzipSize = (await fs.stat(`${file}.gz`)).size;
    results.push({
      libraryName,
      fileSize: humanize.filesize(fileSize),
      gzipSize: humanize.filesize(gzipSize),
    });
  }

  const maxLength = {
    libraryName: Math.max(...results.map((r) => r.libraryName.length)),
    fileSize: Math.max(...results.map((r) => r.fileSize.length)),
    gzipSize: Math.max(...results.map((r) => r.gzipSize.length)),
  };
  for (const result of results) {
    console.log(
      [
        result.libraryName.padEnd(maxLength.libraryName),
        '\x20|\x20',
        result.fileSize.padStart(maxLength.fileSize),
        '\x20(gzipped:\x20',
        result.gzipSize.padStart(maxLength.gzipSize),
        ')',
      ].join(''),
    );
  }
});
