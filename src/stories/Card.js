import React from 'react';
import glamorous from 'glamorous';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Photos } from './../mocks/photos';

import Text from '../components/Text';
import Card from '../components/Card';
import View from '../components/View';

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

const dimensionsSquare = object(
  'Dimensions',
  {
    xs: { w: '100%', h: 330 },
    sm: { w: 'calc(50% - 20px)', h: 330 },
    md: { w: 'calc(33% - 17px)', h: 330 },
    lg: { w: 'calc(33% - 17px)', h: 330 },
  },
);
const imgHeightsSquare = object(
  'Image heights',
  {
    xs: 330,
    sm: 330,
    md: 330,
    lg: 330,
  },
);

const ViewAdapter = glamorous(View)({
  flexDirection: 'row',
  flexWrap: 'wrap',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
  },
});

storiesOf('Cards', module).addDecorator(withKnobs)
  .add('img + text',
    withInfo(`
      <p>Card that shows an image with text.</p>
      
      ##### Required Props

      <p>
        <li><strong>color</strong> : color for the card</li>
        <li><strong>cover</strong> : image background</li>
        <li><strong>zoom</strong> : enable for a zoom effect on image hover</li>
        <li><strong>imgHeight</strong> : height of the image</li>
        <li><strong>dimensions</strong> : width & height of the card + breakpoints</li>
      </p>
    `)(() => (
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
    )),
  )
  .add('img', () => (
    <ViewAdapter container>
      <Card
        cover={text('Cover', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg')}
        color="white"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', false)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: 0,
          padding: 0,
          backgroundSize: 'cover',
          borderRadius: 5,
        }}
        styleCont={{ padding: 0 }}
      />
      <Card
        cover={text('Cover', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg')}
        color="white"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', false)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: 0,
          padding: 0,
          backgroundSize: 'cover',
          borderRadius: 5,
        }}
        styleCont={{ padding: 0 }}
      />
      <Card
        cover={text('Cover', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg')}
        color="white"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', false)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: '0px auto',
          padding: 0,
          backgroundSize: 'cover',
          borderRadius: 5,
        }}
        styleCont={{ padding: 0 }}
      />
    </ViewAdapter>
  ));
