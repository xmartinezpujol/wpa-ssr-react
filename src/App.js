import React from 'react';

import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button template="default">Hello React App!</Button>
    );
  }
}

export default App;
