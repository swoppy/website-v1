import React from 'react';
import { IconLinkBox } from '../icon_link_box';
import { Pager } from '../../layouts/pager/pager';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Components/IconLinkBox',
  component: IconLinkBox,
};

const sampleLink = 'https://twitter.com/swoppy_'
export const TwitterBoxStory = () => {
  return (
    <Pager>
      <IconLinkBox link={sampleLink} icon={faTwitter}/>
    </Pager>
  );
};

TwitterBoxStory.story = {
  name: 'Twitter',
};

const sampleLink2 = 'https://github.com/swoppy'
export const GitBoxStory = () => {
  return (
    <Pager>
      <IconLinkBox link={sampleLink2} icon={faGithub}/>
    </Pager>
  );
};

GitBoxStory.story = {
  name: 'Github',
};