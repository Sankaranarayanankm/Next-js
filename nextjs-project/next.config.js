module.exports = {
  // future: { webpack5: true }, // Uncomment if using Webpack 5
  postcss: {
    plugins: [
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
      ],
    ],
  },
};
