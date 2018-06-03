import * as glamor from 'glamor';
import glamorous from 'glamorous';

const spin = glamor.css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Loader = glamorous.div({
  border: '6px solid #f3f3f3',
  borderTop: '6px solid #FF454E',
  borderRadius: '50%',
  width: 50,
  height: 50,
  animation: `${spin} 2s linear infinite`,
});

export default Loader;
