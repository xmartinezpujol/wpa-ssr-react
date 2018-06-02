import React from 'react';
import glamorous from 'glamorous';
import InfiniteScroll from 'react-infinite-scroller';

import Card from '../components/Card';
import Text from '../components/Text';
import View from '../components/View';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreCards: true,
      maxPage: Math.round(this.props.images.length / 3),
      curPage: 0,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.loadCards = this.loadCards.bind(this);
    this.shouldPageLoad = this.shouldPageLoad.bind(this);
  }

  handleSelection() {

  }

  loadCards(page) {
    if (this.shouldPageLoad(page)) {
      this.setState(() => ({
        curPage: this.state.curPage + 1,
      }));
    }
  }

  shouldPageLoad(page) {
    if (page === this.state.maxPage) {
      this.setState(() => ({
        hasMoreCards: false,
      }), () => false);
    }
    return true;
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
      <View container justify="flex-start" style={{ flexFlow: 'row wrap' }}>
        {this.props.images && this.props.images.length > 0 &&
          <InfiniteScroll
            pageStart={0}
            loadMore={() => this.loadCards(this.state.curPage)}
            hasMore={this.state.hasMoreCards}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {this.props.images.slice(0, this.state.curPage * 3).map(photo => (
              <Card
                key={photo.id}
                cover={`./assets/img/oriental/${photo.img}.jpg`}
                color="white"
                onClick={() => this.handleSelection(photo.id)}
                clickable
                zoom
                dimensions={dimensions}
                imgHeight={imgHeights}
              >
                <Text type="h2">{photo.title}</Text>
                <Text type="p1">{photo.text}</Text>
              </Card>
            ))}
          </InfiniteScroll>
        }
        {(!this.props.images || this.props.images.length === 0) &&
          <Text type="p1">No images in this gallery :(</Text>
        }
      </View>
    );
  }
}

export default Gallery;
