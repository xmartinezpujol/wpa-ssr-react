import React from 'react';
import glamorous from 'glamorous';

const Text = (props) => {
  const styles = {
    h1: {
      fontSize: 36,
      color: '#36424A',
      fontWeight: 900,
    },
    'h1.w': {
      fontSize: 36,
      color: '#FFFFFF',
      fontWeight: 900,
    },
    h2: {
      fontSize: 25,
      color: '#36424A',
      fontWeight: 900,
    },
    'h2.1': {
      fontSize: 25,
      color: '#36424A',
      fontWeight: 700,
    },
    'h2.2': {
      fontSize: 25,
      color: '#6E7A83',
      fontWeight: 700,
    },
    'h2.w': {
      fontSize: 25,
      color: '#FFFFFF',
      fontWeight: 900,
    },
    h3: {
      fontSize: 18,
      color: '#36424A',
      fontWeight: 900,
    },
    'h3.1': {
      fontSize: 18,
      color: '#6E7A83',
      fontWeight: 700,
    },
    'h3.w': {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      color: '#6E7A83',
      fontWeight: 400,
    },
    'h4.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 400,
    },
    h5: {
      fontSize: 11,
      fontWeight: 900,
      textTransform: 'uppercase',
      '@media(min-width: 768px)': {
        fontSize: 16,
      },
      '@media(min-width: 992px)': {

      },
      '@media(min-width: 1200px)': {

      },
    },
    'h5.w': {
      fontSize: 16,
      fontWeight: 900,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },
    p1: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
    },
    'p1.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 300,
      whiteSpace: 'pre-line',
    },
    p2: {
      fontSize: 13,
      color: '#B6BABD',
      fontWeight: 400,
    },
    p3: {
      fontSize: 12,
      color: '#B6BABD',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontWeight: 400,
    },
    p4: {
      fontSize: 12,
      color: '#B6BABD',
      fontWeight: 400,
    },
    p5: {
      fontSize: 12,
      color: '#6E7A83',
      fontWeight: 400,
    },
    span: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
    },
  };
  let propOrDefault = '';

  if (props.type.substring(0, 1) === 'h') {
    propOrDefault = typeof (styles[props.type]) !== 'undefined'
      ? props.type.substring(0, 2)
      : styles.p1;
  }
  if (props.type.substring(0, 1) === 'p') {
    propOrDefault = typeof styles[props.type] !== 'undefined'
      ? props.type.substring(0, 1)
      : styles.p1;
  }
  if (props.type.substring(0, 1) === 's') {
    propOrDefault = typeof styles[props.type] !== 'undefined'
      ? props.type.substring(0, 4)
      : styles.p1;
  }

  const GlamorTextGenerator = glamorous(propOrDefault)(styles[props.type]);
  return <GlamorTextGenerator style={props.style}>{props.children}</GlamorTextGenerator>;
};

export default Text;
