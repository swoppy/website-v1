import React from 'react';
import { TipBox } from '../tip_box';
import { Pager } from '../../layouts/pager/pager';
import imgBtc from '../../../assets/img/qr/btc_qr.png';

export default {
  title: 'Components/TipBox',
  component: TipBox,
};

const sampleLabel = 'Tip BTC'
const sampleToolTip = 'skjdbsjkdbfksjdfbjdlb';
export const TipBoxStory = () => {
  return (
    <Pager>
      <TipBox
        qrPath={imgBtc}
        label={sampleLabel}
        tooltip={sampleToolTip}
      />
    </Pager>
  );
};

TipBoxStory.story = {
  name: 'BTC',
};