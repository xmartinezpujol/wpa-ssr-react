import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Card from '../components/Card';
import Text from '../components/Text';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreCards: true,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.loadCards = this.loadCards.bind(this);
    this.shouldPageLoad = this.shouldPageLoad.bind(this);
    this.imageURL = this.imageURL.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.images !== this.props.images) {

    }
  }

  handleSelection(id) {
    alert(`Selected Card ${id}`);
  }

  loadCards(page) {
    if (this.shouldPageLoad(page)) {
      this.props.onLoadPhotos();
    }
  }

  shouldPageLoad(page) {
    if (page === this.props.pages) {
      this.setState(() => ({
        hasMoreCards: false,
      }), () => false);
    }
    return true;
  }

  imageURL(img) {
    return `http://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
  }

  render() {
    const dimensions = {
      xs: { w: '100%', h: 240 },
      sm: { w: 'calc(50% - 20px)', h: 285 },
      md: { w: 'calc(50% - 20px)', h: 285 },
      lg: { w: 'calc(33% - 16px)', h: 285 },
    };
    const imgHeights = {
      xs: 130,
      sm: 165,
      md: 165,
      lg: 165,
    };
    return (
      <React.Fragment>
        <Text type="h1">
          <span style={{ padding: '0 10px' }} role="img" aria-label="gallery">🎨</span>
          Flickr Interesting Photos
        </Text>
        {this.props.images && this.props.images.length > 0 &&
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadCards}
            hasMore={this.state.hasMoreCards}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {this.props.images.map((photo) => {
              const imgUrl = this.imageURL(photo);
              return (
                <Card
                  key={photo.id}
                  cover={imgUrl}
                  color="white"
                  clickable
                  zoom
                  dimensions={dimensions}
                  imgHeight={imgHeights}
                  onSelection={() => this.handleSelection(photo.id)}
                >
                  <Text
                    type="h3"
                    style={{
                      width: 300,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {photo.title}
                  </Text>
                  <Text type="p1">{photo.text}</Text>
                </Card>
              );
            })}
          </InfiniteScroll>
        }
      </React.Fragment>
    );
  }
}

export default Gallery;
