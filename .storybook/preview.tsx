import type { Preview } from '@storybook/react';
import ThemeProvider from '@core/setup/ThemeProvider';
import type { ThemeMode } from '@core/theme/typing';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story, { argTypes: { mode = 'light' } }) => (
      <ThemeProvider mode={mode as ThemeMode}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
