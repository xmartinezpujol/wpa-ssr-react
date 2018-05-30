import React from 'react';
import glamorous from 'glamorous';

import { COLOR_PALETTE } from '../Constants';

const CardContainer = glamorous.div(
  {
    textDecoration: 'none',
    fontSize: 16,
    margin: 10,
    border: 'none',
    display: 'inline-block',
    padding: '10px 20px',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    borderRadius: 5,
    color: '#000',
    boxShadow: '0 8px 30px 2px #f4f4f4',
    ':focus': { outline: 0 },
  },
  props => ({
    backgroundColor: COLOR_PALETTE[props.color],
    height: props.height,
    cursor: props.clickable ? 'pointer' : 'initial',
    ':hover': {
      opacity: props.clickable ? 0.8 : 1,
      transform: props.clickable ? 'translateY(-1px)' : 'none',
      boxShadow: props.clickable ? '0 4px 6px rgba(50,50,93,.31), 0 1px 2px rgba(0,0,0,.40)' : '0 4px 6px rgba(50,50,93,.11), 0 1px 2px rgba(0,0,0,.20)',
    },
    ':active': {
      transform: props.clickable ? 'translateY(1px)' : 'none',
    },
    '@media(min-width: 1200px)': {
      minWidth: props.dimensions.lg.w,
      maxWidth: props.dimensions.lg.w,
    },
    '@media(max-width: 1200px)': {
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w,
    },
    '@media(max-width: 992px)': {
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w,
    },
    '@media(max-width: 768px)': {
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w,
      margin: '10px auto',
    },
  }),
);

const Background = glamorous.div(
  {
    height: '140px',
    margin: '-10px -20px 10px',
  },
  props => (
    {
      background: props.color,
    }
  ),
);

const Image = glamorous.div(
  {
    margin: '-10px -20px 10px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    transition: 'all 0.4s ease',
  },
  props => ({
    height: props.imgHeight.lg,
    backgroundImage: `url(${props.url})`,
    ':hover': {
      backgroundSize: props.zoom ? '150%' : '100%',
    },
    '@media(max-width: 1200px)': {
      height: props.imgHeight.md,
    },
    '@media(max-width: 992px)': {
      height: props.imgHeight.sm,
    },
    '@media(max-width: 767px)': {
      height: props.imgHeight.xs,
    },
  }),
);

const Card = props => (
  <CardContainer
    dimensions={props.dimensions}
    height={props.height}
    clickable={props.clickable}
    color={props.color}
    style={props.styleCont}
  >
    {props.cover &&
      <Image
        url={props.cover}
        zoom={props.zoom}
        imgHeight={props.imgHeight}
        style={props.style}
      />
    }
    {!props.cover &&
      <Background color={props.color} style={props.style} />
    }
    {props.children}
  </CardContainer>
);

export default Card;
