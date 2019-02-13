import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import * as Atoms from '../js/component/atoms';
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

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);
stories.add('Calendar', () => {
  const planDateList = [
    {
      date: moment('2018-12-31'),
      state: 'disable'
    },
    {
      date: moment('2019-01-01'),
      state: 'selected'
    },
    {
      date: moment('2019-01-31'),
      state: 'empty'
    },
    {
      date: moment('2019-02-01'),
      state: 'disable'
    }
  ];
  return (
    <>
      <Atoms.Calendar
        currentDate={moment('2019-01-01')}
        dayNameList={array('dayNameList', [
          '日',
          '月',
          '火',
          '水',
          '木',
          '金',
          '土'
        ])}
        dateFormat={text('dateFormat', 'YYYY-MM')}
        planDateList={planDateList}
        offset={number('offset', 1)}
        isRadio={boolean('isRadio', false)}
        onClickDate={action('onClickDate')}
      />
      <br />
      <p>デフォルト</p>
      <br />
      <Atoms.Calendar />
    </>
  );
});

stories.addDecorator(withKnobs);
stories.add('Button', () => {
  return (
    <div style={{ width: number('out-line-width', 100), margin: 20 }}>
      <Atoms.Button isGhost={boolean('isGhost', false)}>
        {text('children', 'test')}
      </Atoms.Button>
    </div>
  );
});

stories.addDecorator(withKnobs);
stories.add('CounButton', () => {
  return (
    <div style={{ width: number('out-line-width', 100), margin: 20 }}>
      <Atoms.CountButton
        value={number('value', 5)}
        onIncrement={action('onIncrement')}
        onDecrement={action('onDecrement')}
        isIncrementDisable={boolean('isIncrementDisable', false)}
        isDecrementDisable={boolean('isDecrementDisable', false)}
      />
    </div>
  );
});
