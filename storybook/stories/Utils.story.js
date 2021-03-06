import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Error, Icon, Loading } from '../../src';

const stories = storiesOf('Utils', module);

stories.add('Error', () => <Error error={{ message: 'This is a fake error.' }} />);

stories.add('Icon', () =>
  <div style={styles.iconsWrapper}>
    <Icon children="home" />
    <Icon children="flight_takeoff" />
    <Icon children="cloud_download" />
    <Icon children="videogame_asset" />
  </div>
);

stories.add('Loading', () => <Loading />);

const styles = {
  iconsWrapper: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
