import React from 'react';
import { Terminal } from '../terminal';
import { Pager } from '../../layouts/pager/pager';

export default {
  title: 'Terminal',
  component: Terminal,
};

export const TerminalStory = () => {
  return (
    <Pager bgColor={'#1a2737'}>
      <Terminal/>
    </Pager>
  );
};

TerminalStory.story = {
  name: 'The Terminal',
};