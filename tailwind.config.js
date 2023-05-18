/* eslint-disable @typescript-eslint/no-var-requires */
// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.mdx',
    './.storybook/preview.ts',
  ],
  theme: {
    extend: {},
  },
  presets: [require('./tailwind-preset')],
  plugins: [require('@tailwindcss/forms')],
}
