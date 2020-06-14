import React from 'react';
import baseStyles from './tip_box.module.css';
import { useStyles, Theme, ThemedStyles } from '../../ui/themes';

type TipBoxStyles = {
  tipBoxContainer: string;
  qrContainer: string;
  qrImage: string;
  tooltiptext: string;
};

const themedStyles: ThemedStyles<TipBoxStyles> = {
  [Theme.LIGHT]: {
    tipBoxContainer: baseStyles.tipBoxContainer,
    qrContainer: baseStyles.qrContainer,
    qrImage: baseStyles.qrImage,
    tooltiptext: baseStyles.tooltiptext,
  },
  [Theme.DARK]: {
    tipBoxContainer: baseStyles.tipBoxContainer,
    qrContainer: baseStyles.qrContainer,
    qrImage: baseStyles.qrImage,
    tooltiptext: baseStyles.tooltiptext,
  },
}

type TipBoxProps = {
  qrPath: string;
  label: string;
  tooltip: string;
};

export const TipBox = ({ qrPath, label, tooltip}: TipBoxProps) => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.tipBoxContainer}>
      <div className={styles.qrContainer}>
        <div className={styles.qrImage}>
          <img src={qrPath} alt='qr'/>
        </div>
        <div>{label}</div>
        <span className={styles.tooltiptext}>{tooltip}</span>
      </div>
    </div>
  );
};