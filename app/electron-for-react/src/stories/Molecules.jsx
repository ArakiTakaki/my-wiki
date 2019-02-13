import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import * as Molecules from '../js/component/molecules';
import {
  withKnobs,
  text,
  date,
  select,
  boolean,
  array,
  number
} from '@storybook/addon-knobs';
import moment from 'moment';

const stories = storiesOf('Molecules', module);
stories.addDecorator(withKnobs);
stories.add('DatePicker', () => {
  return (
    <Molecules.DatePicker
      currentDate={moment()}
      onClickDate={action('onClickDate')}
      onClickNext={action('onClickNext')}
      onClickPrev={action('onClickPrev')}
      offset={number('offset', 0)}
      isDisablePrev={boolean('isDisablePrev', false)}
      isDisableNext={boolean('isDisableNext', false)}
    />
  );
});
