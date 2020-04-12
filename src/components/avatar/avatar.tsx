import React from 'react';
import styles from './avatar.module.css';
import image from '../../assets/avatar/swop.jpg';

type AvatarProps = {
  src: string;
};

export const Avatar = () => {
  return (
    <img src={image} className={styles.container} alt='avatar'/>
  );
};