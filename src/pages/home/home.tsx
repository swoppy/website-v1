import React from 'react';
import baseStyles from './home.module.css';
import text from './home_text';
import { Pager } from '../../components/layouts/pager/pager';
import { ThemedStyles, Theme, useStyles, GlobalThemeStore } from '../../ui/themes';
import { observer } from 'mobx-react';
import { ThemeSwitcher } from '../../components/theme_switcher/theme_switcher';
import { HomeStore } from './home_store';
import { IconLinkBox } from '../../components/icon_link_box/icon_link_box';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

type HomeStyle = {
  container: string;
  controlSpace: string;
  detailSpace: string;
  controlHeader: string;
  knobContainer: string;
  navigationSection: string;
  optionsContainer: string;
  socialLinksContainer: string;
  controlFooter: string;
};

const themedStyles: ThemedStyles<HomeStyle> = {
  [Theme.LIGHT]: {
    container: baseStyles.container,
    controlSpace: baseStyles.controlSpace,
    detailSpace: baseStyles.lightDetailSpace,
    controlHeader: baseStyles.lightControlHeader,
    knobContainer: baseStyles.knobContainer,
    navigationSection: baseStyles.lightNavigationSection,
    optionsContainer: baseStyles.optionsContainer,
    socialLinksContainer: baseStyles.lightSocialLinksContainer,
    controlFooter: baseStyles.lightControlFooter,
  },
  [Theme.DARK]: {
    container: baseStyles.container,
    controlSpace: baseStyles.controlSpace,
    detailSpace: baseStyles.darkDetailSpace,
    controlHeader: baseStyles.darkControlHeader,
    knobContainer: baseStyles.knobContainer,
    navigationSection: baseStyles.darkNavigationSection,
    optionsContainer: baseStyles.optionsContainer,
    socialLinksContainer: baseStyles.darkSocialLinksContainer,
    controlFooter: baseStyles.darkControlFooter,
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
      <div className={styles.navigationSection}>
        <div className={styles.optionsContainer}>
          <div>{text.about()}</div>
          <div>{text.projects()}</div>
          <div>{text.contact()}</div>
        </div>
      </div>
      <div className={styles.socialLinksContainer}>
        <IconLinkBox link={text.twitLink()} icon={faTwitter}/>
        <IconLinkBox link={text.gitLink()} icon={faGithub}/>
      </div>
      <div className={styles.controlFooter}>
        <div>
          {text.footTitle()}
        </div>
        <div>
          {text.footLink()}
        </div>
      </div>
    </div>
  );
});

const DetailSpace = () => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.detailSpace}>
 
    </div>
  );
};

type BaseHomeProps = {
  store: HomeStore;
};

const BaseHome = ({ store }: BaseHomeProps) => {
  const styles = useStyles(themedStyles);
  return (
    <Pager>
      <div className={styles.container}>
        <ControlSpace store={store}/>
        <DetailSpace/>
      </div>
    </Pager>
  );
};

export const Home = () => {
  const [store] = React.useState(
    new HomeStore(GlobalThemeStore.get() === Theme.DARK)
  );
  return <BaseHome store={store}/>
};