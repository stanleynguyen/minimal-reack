const path = require('path');

const SRC_DIR = path.resolve('src');
const DIST_DIR = path.resolve('dist');

module.exports = {
  SRC_DIR,
  DIST_DIR,
  MODULE: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: [SRC_DIR],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: [
                // Stage 0
                '@babel/plugin-proposal-function-bind',

                // Stage 1
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-logical-assignment-operators',
                ['@babel/plugin-proposal-optional-chaining', { loose: false }],
                [
                  '@babel/plugin-proposal-pipeline-operator',
                  { proposal: 'minimal' },
                ],
                [
                  '@babel/plugin-proposal-nullish-coalescing-operator',
                  { loose: false },
                ],
                '@babel/plugin-proposal-do-expressions',

                // Stage 2
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',

                // Stage 3
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-import-meta',
                ['@babel/plugin-proposal-class-properties', { loose: false }],
                '@babel/plugin-proposal-json-strings',

                // React Hot Loader
                'react-hot-loader/babel',
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
