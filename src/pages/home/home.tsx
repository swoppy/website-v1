import React from 'react';
import baseStyles from './home.module.css';
import { Pager } from '../../components/layouts/pager/pager';
import { ThemedStyles, Theme, useStyles, GlobalThemeStore } from '../../ui/themes';
import { observer } from 'mobx-react';
import { ThemeSwitcher } from '../../components/theme_switcher/theme_switcher';
import { HomeStore } from './home_store';

type HomeStyle = {
  container: string;
  controlSpace: string;
  detailSpace: string;
  controlHeader: string;
  knobContainer: string;
};

const themedStyles: ThemedStyles<HomeStyle> = {
  [Theme.LIGHT]: {
    container: baseStyles.container,
    controlSpace: baseStyles.controlSpace,
    detailSpace: baseStyles.detailSpace,
    controlHeader: baseStyles.controlHeader,
    knobContainer: baseStyles.knobContainer,
  },
  [Theme.DARK]: {
    container: baseStyles.container,
    controlSpace: baseStyles.controlSpace,
    detailSpace: baseStyles.detailSpace,
    controlHeader: baseStyles.controlHeader,
    knobContainer: baseStyles.knobContainer,
  },
};

type ControlSpaceProps = {
  store: HomeStore;
};

const ControlSpace = observer(({ store }: ControlSpaceProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.controlSpace}>
      <div className={styles.controlHeader}>
          <div className={styles.knobContainer}>
            <ThemeSwitcher store={store.theme}/>
          </div>
      </div>
    </div>
  );
});

const DetailSpace = () => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.detailSpace}>
      details
    </div>
  );
};

type BaseHomeProps = {
  store: HomeStore;
};

export const Home = () => {
  const styles = useStyles(themedStyles);
  const [store] = React.useState(
    new HomeStore(GlobalThemeStore.get() === Theme.DARK)
  );
  return (
    <Pager>
      <div className={styles.container}>
        <ControlSpace store={store}/>
        <DetailSpace/>
      </div>
    </Pager>
  );
};