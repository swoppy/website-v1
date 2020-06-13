import React from 'react';
import baseStyles from './pager.module.css';
import { ThemedStyles, Theme, useStyles } from '../../../ui/themes';

type PagerStyles = {
  background: string;
};

const themedStyles: ThemedStyles<PagerStyles> = {
  [Theme.LIGHT]: {
    background: baseStyles.daylightBackground,
  },
  [Theme.DARK]: {
    background: baseStyles.midnightBackground,
  },
};

type PagerProps = {
  children: React.ReactNode;
};

export const Pager = React.memo(({ children }: PagerProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.background}>
      {children}
    </div>
  );
});