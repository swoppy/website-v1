import { addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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

// automatically import all files ending in *.stories.js
configure([
  requireContext('../src', true, /\.stories\.tsx$/)
], module);