module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.js',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  features: {
    postcss: true,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack4',
  },
};
