import React from 'react';
import glamorous from 'glamorous';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import Card from '../components/Card';
import Loader from '../components/Loader';
import Text from '../components/Text';
import Modal from '../components/Modal';

import ImageDetail from './ImageDetail';

import * as galleryActions from '../redux/modules/Gallery/imagesGallery';

const FullWidthWrapper = glamorous.div({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  display: 'flex',
  width: '100vw',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreCards: true,
      modalImage: 'closed',
      imgSelected: null,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.loadCards = this.loadCards.bind(this);
    this.shouldPageLoad = this.shouldPageLoad.bind(this);
    this.imageURL = this.imageURL.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(galleryActions.loadPhotos(1));
  }

  handleSelection(id) {
    this.setState(() => ({
      imgSelected: id,
    }));
    this.openModal();
  }

  loadCards(page) {
    if (this.shouldPageLoad(page)) {
      this.props.dispatch(galleryActions.loadPhotos(page));
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

  openModal() {
    this.setState(() => ({
      modalImage: 'opened',
    }));
  }

  closeModal() {
    this.setState(() => ({
      modalImage: 'closed',
    }));
  }

  render() {
    const dimensions = {
      xs: { w: '100%', h: 240 },
      sm: { w: 'calc(50% - 20px)', h: 285 },
      md: { w: 'calc(33% - 20px)', h: 285 },
      lg: { w: 'calc(33% - 20px)', h: 285 },
    };
    const imgHeights = {
      xs: 130,
      sm: 165,
      md: 165,
      lg: 165,
    };
    const { imagesGallery } = this.props;
    const images = imagesGallery.photos;
    return (
      <React.Fragment>
        <Text type="h1">
          <span style={{ padding: '0 10px' }} role="img" aria-label="gallery">🎨</span>
          Flickr Interesting Photos
        </Text>
        {typeof (images) !== 'undefined' && images.length > 0 &&
          <React.Fragment>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadCards}
              hasMore={this.state.hasMoreCards}
              loader={<div className="loader" key={0}>Loading ...</div>}
            >
              {images.map((photo) => {
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
                      type="h4"
                      style={{
                        width: 300,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        margin: '5px 0',
                      }}
                    >
                      {photo.title}
                    </Text>
                  </Card>
                );
              })}
            </InfiniteScroll>
            <div>
              {this.state.modalImage === 'opened' &&
              <Modal onModalClose={this.closeModal}>
                <ImageDetail id={this.state.imgSelected} onCloseClick={this.closeModal} />
              </Modal>
              }
            </div>
          </React.Fragment>
        }
        {imagesGallery.isLoading &&
          <FullWidthWrapper>
            <Loader />
          </FullWidthWrapper>
        }
        {!imagesGallery.isLoading && typeof (images) !== 'undefined' && images.length === 0 &&
          <Text type="p1">No images in this gallery :(</Text>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  imagesGallery: state.imagesGallery,
});

export default connect(mapStateToProps)(Gallery);
