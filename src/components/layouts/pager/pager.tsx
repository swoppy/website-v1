import React from 'react';
import styles from './pager.module.css';

type PagerProps = {
  children: React.ReactNode;
  bgColor: string;
};

// Initially, this component is just simply a background wrapper but could be something more
export const Pager = ({ children, bgColor }: PagerProps) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};