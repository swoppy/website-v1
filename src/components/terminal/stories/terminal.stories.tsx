import React from 'react';
import { Terminal } from '../terminal';
import { Pager } from '../../layouts/pager/pager';

export default {
  title: 'Components/Terminal',
  component: Terminal,
};

export const TerminalStory = () => {
  return (
    <Pager>
      <Terminal/>
    </Pager>
  );
};

TerminalStory.story = {
  name: 'The Terminal',
};