import React from 'react';

import Gallery from './containers/Gallery';

// Mocking the images
import Photos from './mocks/photos';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Gallery images={Photos.oriental.photos} />
    );
  }
}

export default App;
