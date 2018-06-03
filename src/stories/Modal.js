import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Modal from '../components/Modal';
import Button from '../components/Button';
import Text from '../components/Text';

const app = document.createElement('div');
app.setAttribute('id', 'modal');
document.body.appendChild(app);

storiesOf('Modal', module).addDecorator(withKnobs)
  .add('default', () => (
    <ModalControlled opened={boolean('Opened', true)} />
  ));

const ModalControlled = props => (
  <React.Fragment>
    {props.opened &&
    <Modal
      padding={35}
      onModalClose
      windowed={boolean('Modal full window? ', false)}
      style={{ alignItems: 'flex-end', maxWidth: 400 }}
    >
      <Button
        style={{
          maxWidth: 50,
          borderRadius: 200,
          padding: '0 20px',
          minHeight: 50,
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        x
      </Button>
      <Text type="p1">This a super duper modal with a close button. If you want to see open/close events, link them with the components methods.</Text>
    </Modal>
    }
  </React.Fragment>
);
