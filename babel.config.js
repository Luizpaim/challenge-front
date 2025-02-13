module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  overrides: [
    {
      test: /\.ts$/,
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  ],
}
