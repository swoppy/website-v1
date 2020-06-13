import React from 'react';
import { observer } from 'mobx-react';

export type StoryFunction = {
  (): React.ReactNode;
  story?: {
    name?: string;
  };
};

export const storyObserver = (component: React.ComponentType<{}>): StoryFunction => {
  const Observed = observer(component);
  const Story = () => <Observed/>;
  Story.displayName = component.displayName;
  return Story;
};
