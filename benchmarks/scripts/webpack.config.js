import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';

export default {
  mode: 'production',
  entry: {
    moment: 'moment',
    luxon: 'luxon',
    fecha: 'fecha',
    'date-fns': 'date-fns/format',
    dayjs: 'dayjs',
    dateformat: 'dateformat',
    'time-stamp': 'time-stamp',
    fdate: 'fdate',
  },
  output: {
    path: path.resolve(__dirname, '../tmp'),
    filename: 'dist/[name].js',
  },
  resolve: {
    mainFields: ['module', 'browser', 'main'],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      reportFilename: './report.html',
    }),
    new CompressionPlugin({
      test: /\.js$/,
    }),
  ],
};
