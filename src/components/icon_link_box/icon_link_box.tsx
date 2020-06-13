import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme, useStyles, ThemedStyles } from '../../ui/themes';
import baseStyles from './icon_link_box.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type boxSytle = {
  box: string;
  link: string;
};

const themedStyles: ThemedStyles<boxSytle> = {
  [Theme.LIGHT]: {
    box: baseStyles.lightBox,
    link: baseStyles.lightLink,
  },
  [Theme.DARK]: {
    box: baseStyles.darkBox,
    link: baseStyles.darkLink,
  },
};

type IconLinkBoxProps = {
  link: string;
  icon: IconProp
};

export const IconLinkBox = ({ link, icon }: IconLinkBoxProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.box}>
      <a
        href={link}
        rel='noopener noreferrer'
        target='_blank'
        className={styles.link}
      >
        <FontAwesomeIcon icon={icon}/>
      </a>
    </div>
  )
};