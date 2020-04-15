import React from 'react';
import { Button, Roles } from '../button';
import styles from './buttonStory.module.css';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
  component: Button,
};

export const CloseStory = () => {
  return (
    <Button onClick={action('button-click')} role={Roles.CLOSE}/>
  );
};

export const MinimizeStory = () => {
  return (
    <Button onClick={action('button-click')} role={Roles.MINIMIZE}/>
  );
};

export const MaximizeStory = () => {
  return (
    <Button onClick={action('button-click')} role={Roles.MAXIMIZE}/>

  );
};

export const Combined = () => {
  return (
    <div className={styles.container}>
      <Button onClick={action('button-click')} role={Roles.CLOSE}/>
      <Button onClick={action('button-click')} role={Roles.MINIMIZE}/>
      <Button onClick={action('button-click')} role={Roles.MAXIMIZE}/>
    </div>
  );
};

CloseStory.story = {
  name: 'Close',
};

MinimizeStory.story = {
  name: 'Minimize',
};

MaximizeStory.story = {
  name: 'Maximize',
};

Combined.story = {
  name: 'Combined',
};