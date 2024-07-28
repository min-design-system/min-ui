import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandImage:
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYTsgexH-VD785buU4rd28H8YB6FvgW76Svx5HNnY2eHsU8WzMkTLjz6WxNaGsW7tCNtD_-kXD-zodTlZUI3IbG8RrmlNOz0bk=w3456-h1852'
});

addons.setConfig({
  theme
});
