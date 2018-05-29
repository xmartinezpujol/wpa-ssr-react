import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Text from '../components/Text';
import View from '../components/View';

storiesOf('Texts', module)
  .add('local', () => {
    return (
      <View container direction="column">
        <Text type="h1">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="h2">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="h3">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="h4">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="h5">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="p1">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="p2">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="p3">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="p4">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="p5">{`I'm a title, trying to be descriptive!`}</Text>
        <Text type="span">{`I'm a title, trying to be descriptive!`}</Text>
      </View>
    );
  });
