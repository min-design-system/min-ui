import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  fontBase: 'MinSansNeoVF',
  brandImage: 'https://min-design-system.s3.ap-northeast-2.amazonaws.com/min-ui-logo.jpeg'
});

addons.setConfig({
  theme
});
