import React from 'react';
import { ThemeSwitcher } from '../theme_switcher';
import { Pager } from '../../layouts/pager/pager';
import { BooleanStore } from '../../../ui/generic_store';
import { storyObserver } from '../../../stories/mobx_helpers';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
};

const store = new BooleanStore(false);
export const ThemeSwitcherStory = storyObserver(() => {
  return ( 
    <Pager>
      <ThemeSwitcher store={store}/>
      <div>Value: { store.value ? 'true' : 'false' }</div>
    </Pager>
  );
});

ThemeSwitcherStory.story = {
  name: 'ThemeSwitcher',
};