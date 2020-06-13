import React from 'react';
import { Home } from '../home';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomeStory = () => {
  return (
    <Home/>
  );
};

HomeStory.story = {
  name: 'Home',
};