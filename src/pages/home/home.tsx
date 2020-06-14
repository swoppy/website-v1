import React from 'react';
import baseStyles from './home.module.css';
import text from './home_text';
import { Pager } from '../../components/layouts/pager/pager';
import { ThemedStyles, Theme, useStyles, GlobalThemeStore } from '../../ui/themes';
import { observer } from 'mobx-react';
import { ThemeSwitcher } from '../../components/theme_switcher/theme_switcher';
import { HomeStore } from './home_store';
import { IconLinkBox } from '../../components/icon_link_box/icon_link_box';
import { DivClickEvent, DivFuncEventType, SvgFuncEventType } from '../../types/base/events';
import ReactHtmlParser from 'react-html-parser';
import { TipBox } from '../../components/tip_box/tip_box';
import qrBtc from '../../assets/img/qr/btc_qr.png';
import qrXmr from '../../assets/img/qr/xmr_qr.png';

// TODO: import is from a separate file using svg-core library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  detailHeader: string;
  details: string;
  detailFooter: string;
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
    detailHeader: baseStyles.lightDetailHeader,
    details: baseStyles.lightDetails,
    detailFooter: baseStyles.detailFooter,
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
    detailHeader: baseStyles.darkDetailHeader,
    details: baseStyles.darkDetails,
    detailFooter: baseStyles.detailFooter,
  },
};

type ControlSpaceProps = {
  store: HomeStore;
  handleActive: DivFuncEventType;
};

const ControlSpace = observer(({ store, handleActive }: ControlSpaceProps) => {
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
          <div onClick={handleActive}>{text.about()}</div>
          <div onClick={handleActive}>{text.projects()}</div>
          <div onClick={handleActive}>{text.contact()}</div>
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

const Projects = () => {
  return (
    <>
    </>
  );
};

const getDetailsByActive = (active: string | null) => {
  switch(active) {
    case text.about():
      return text.aboutDetail();
    case text.projects():
      return text.projects();
    case text.contact():
      // for the meantime, to test render jsx node
      return <IconLinkBox link={text.twitLink()} icon={faTwitter}/>;
    default:
      return '';
  }
}

type DetailHeaderProps = {
  active: string | null;
  closeFunc: SvgFuncEventType;
};

const DetailHeader = ({ active, closeFunc }: DetailHeaderProps) => {
  const styles = useStyles(themedStyles);
  if(!active) {
    return null;
  }
  return (
    <div className={styles.detailHeader}>
      <div>{active}</div>
      <FontAwesomeIcon icon={faTimes} onClick={closeFunc}/>
    </div>
  );
};

type DetailSpaceProps = {
  active: string | null;
  closeFunc: SvgFuncEventType;
};

const DetailSpace = ({ active, closeFunc }: DetailSpaceProps) => {
  const styles = useStyles(themedStyles);
  const tipBoxDetail: { qrPath: string, label: string, toolTip: string }[] = [
    {
      qrPath: qrBtc,
      label: text.tipBTC(),
      toolTip: text.btcAddress(),
    },
    {
      qrPath: qrXmr,
      label: text.tipXMR(),
      toolTip: text.xmrAddress(),
    }
  ];
  return (
    <div className={styles.detailSpace}>
      <DetailHeader active={active} closeFunc={closeFunc}/>
      <div className={styles.details}>
        {active === text.contact() ?
          getDetailsByActive(active) :
          ReactHtmlParser(`${getDetailsByActive(active)}`)
        }
      </div>
      <div className={styles.detailFooter}>
        {tipBoxDetail.map((item, key) => {
          return (
            <TipBox
              key={key}
              qrPath={item.qrPath}
              label={item.label}
              tooltip={item.toolTip}
            />
          );
        })}
      </div>
    </div>
  );
};

type BaseHomeProps = {
  store: HomeStore;
};

const BaseHome = ({ store }: BaseHomeProps) => {
  const styles = useStyles(themedStyles);
  const [active, setActive] = React.useState<string | null>(null);
  const handleActive = React.useCallback((event: DivClickEvent) => {
    setActive(event.currentTarget.textContent);
  }, []);
  const handleClose = () => {
    setActive(null);
  };
  return (
    <Pager>
      <div className={styles.container}>
        <ControlSpace store={store} handleActive={handleActive}/>
        <DetailSpace active={active} closeFunc={handleClose}/>
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