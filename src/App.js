import React from 'react';

import Gallery from './containers/Gallery';

import View from './components/View';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <View container justify="flex-start" style={{ flexFlow: 'row wrap' }}>
          <Gallery />
        </View>
        <div id="modal" />
      </React.Fragment>
    );
  }
}

export default App;
