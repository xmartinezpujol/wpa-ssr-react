import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Photos } from './../mocks/photos';

import Text from '../components/Text';
import Card from '../components/Card';

const dimensions = object(
  'Dimensions',
  {
    xs: { w: 310, h: 240 },
    sm: { w: 385, h: 285 },
    md: { w: 385, h: 285 },
    lg: { w: 385, h: 285 },
  },
);
const imgHeights = object(
  'Image heights',
  {
    xs: 130,
    sm: 165,
    md: 165,
    lg: 165,
  },
);

storiesOf('Cards', module).addDecorator(withKnobs)
  .add('img + text', () => (
    <Card
      cover={text('Cover', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg')}
      color="white"
      onClick={action('clicked')}
      clickable={boolean('Clickable', false)}
      zoom={boolean('Zoom', false)}
      dimensions={dimensions}
      imgHeight={imgHeights}
    >
      <Text type="h2">{text('Title', 'Curry')}</Text>
      <Text type="p1">{text('Text', 'Curry (/ˈkʌri/, sometimes /ˈkɜːri/, plural curries) is an umbrella term referring to a number of dishes originating in the cuisine of the Indian subcontinent. .')}</Text>
    </Card>
  ));
