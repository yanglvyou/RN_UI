module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/pages': '.src/pages',
          '@/utils': '.src/utils',
          '@/components': '.src/components',
          '@/assets': '.src/assets',
        },
      },
    ],
  ],
};
