import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Theme, ThemeProvider } from '../src/ui/themes';
import requireContext from 'require-context.macro';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    showRoots: false,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: undefined,
  },
});

// enable storybook knobs
addDecorator(withKnobs);

// inject a theme into the app
const THEME_OPTIONS = [Theme.LIGHT, Theme.DARK];
addDecorator((story) => {
  // call story early so knob store is created before `select` call
  const content = story();
  const defaultTheme = localStorage.getItem('theme');
  const theme = select('Theme', THEME_OPTIONS, defaultTheme != null ? defaultTheme : Theme.DARK);
  localStorage.setItem('theme', theme);
  return (
    <ThemeProvider value={theme}>
      {content}
    </ThemeProvider>
  );
});

// automatically import all files ending in *.stories.js
configure([
  requireContext('../src', true, /\.stories\.tsx$/)
], module);