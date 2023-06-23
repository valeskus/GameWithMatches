module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
        ],
        alias: {
          '@UI': './src/UI',
          '@stores': './src/stores',
          '@components': './src/components',
        },
      },
    ],
  ],
};