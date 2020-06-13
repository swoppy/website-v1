import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemedStyles, Theme, useStyles } from '../../ui/themes';
import baseStyles from './theme_switcher.module.css';
import { observer } from 'mobx-react';
import { BooleanStore } from '../../ui/generic_store';

type ThemeSwitcherStyles = {
  logoContainer: string;
};

const themedStyles: ThemedStyles<ThemeSwitcherStyles> = {
  [Theme.LIGHT]: {
    logoContainer: baseStyles.lightLogoContainer,
  },
  [Theme.DARK]: {
    logoContainer: baseStyles.darkLogoContainer,
  },
};

type BaseThemeSwitcherProps = {
  store: BooleanStore;
}

export const ThemeSwitcher = observer(({ store }: BaseThemeSwitcherProps) => {
  const styles = useStyles(themedStyles);
  const handleClick = React.useCallback(() => {
    store.setValue(!store.value);
  }, [store]);
  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <FontAwesomeIcon icon={store.value ? faSun : faMoon}/>
    </div>
  );
});
