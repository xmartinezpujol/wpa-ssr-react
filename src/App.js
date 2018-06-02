import React from 'react';
import fetch from 'isomorphic-fetch';

import Gallery from './containers/Gallery';

import View from './components/View';
import Text from './components/Text';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      pages: null,
      curPage: null,
    };
    this.loadImages = this.loadImages.bind(this);
  }

  componentDidMount() {
    this.loadImages(1);
  }

  loadImages(page) {
    fetch(`http://localhost:8080/v1/gallery/images/${page}`)
      .then(res => res.json())
      .then((res) => {
        if (res.stat === 'ok') {
          const data = res.photos;
          this.setState(() => ({
            images: this.state.images.concat(data.photo),
            pages: data.pages,
            curPage: page,
          }));
        }
      })
      .catch((error) => {
        throw (error);
      });
  }

  render() {
    const { pages, curPage, images } = this.state;
    return (
      <View container justify="flex-start" style={{ flexFlow: 'row wrap' }}>
        {this.state.images !== null &&
          <Gallery
            images={images}
            pages={pages}
            curPage={curPage}
            onLoadPhotos={() => this.loadImages(this.state.curPage + 1)}
          />
        }
        {this.state.images === null &&
          <Text type="p1">Loading</Text>
        }
      </View>
    );
  }
}

export default App;
