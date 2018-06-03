import React from 'react';
import glamorous from 'glamorous';

import { connect } from 'react-redux';

import Button from '../components/Button';
import Loader from '../components/Loader';
import Text from '../components/Text';
import View from '../components/View';

import * as imageActions from '../redux/modules/Gallery/imageData';

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

const DetailContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80vw',
  padding: 10,
  '@media(min-width: 767px)': {
    padding: 30,
    maxWidth: '65vw',
    maxHeight: '80vh',
    overflow: 'auto',
  },
  '@media(min-width: 1200px)': {
    maxWidth: 700,
  },
});

const Image = glamorous.img({
  minWidth: '100%',
  objectFit: 'cover',
});

const ButtonAdapter = glamorous(Button)({
  display: 'none',
  position: 'absolute',
  top: '-24px',
  right: '-34px',
  maxWidth: 50,
  borderRadius: 200,
  padding: '0 20px',
  minHeight: 50,
  fontSize: 22,
  fontWeight: 500,
  '@media(min-width: 767px)': {
    display: 'flex',
  },
});

const Link = glamorous.a({
  display: 'block',
  color: 'blue',
  margin: '5px 0',
});

const Description = glamorous.div({
  margin: '10px 0',
});

const InfoBox = glamorous(View)({
  marginTop: 10,
});

class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInfo: this.props.imagesGallery,
    };
    this.getImageData = this.getImageData.bind(this);
    this.imageURL = this.imageURL.bind(this);
  }

  componentWillMount() {
    this.setState(() => ({
      imageInfo: this.getImageData(this.props.id)[0],
    }));
    this.props.dispatch(imageActions.loadPhotoData(this.props.id));
  }

  componentWillUnmount() {
    this.props.dispatch(imageActions.resetPhoto());
  }

  getImageData(id) {
    return this.props.imagesGallery.photos.filter(photo => photo.id === id);
  }

  imageURL(img) {
    return `http://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
  }

  render() {
    const imgUrl = this.imageURL(this.state.imageInfo);
    const { data } = this.props.imageData;
    return (
      <React.Fragment>
        {!this.props.imageData.isLoading &&
          <DetailContainer>
            <ButtonAdapter onClick={() => this.props.onCloseClick()}>
              x
            </ButtonAdapter>
            <Image
              src={imgUrl}
              alt={this.state.imageInfo.title}
              title={this.state.imageInfo.title}
            />
            {typeof (data.title._content) !== 'undefined' && data.title._content.length > 0 &&
              <Text type="h3">
                {data.title._content}
              </Text>
            }
            {typeof (data.description._content) !== 'undefined' && data.description._content.length > 0 &&
              <Description dangerouslySetInnerHTML={{ __html: data.description._content }} />
            }
            {typeof (data.owner.username) !== 'undefined' && data.owner.username.length > 0 &&
              <Link target="_blank" href={data.urls.url[0]._content}>
                @{data.owner.username}
              </Link>
            }
            <InfoBox direction="column">
              {typeof (data.title._content) !== 'undefined' && data.title._content.length > 0 &&
                <Text type="span">
                  <strong>Author:</strong> {data.owner.realname}
                </Text>
              }
              {typeof (data.dates.takenunknown) !== 'undefined' && data.dates.takenunknown === '0' &&
                <Text type="span">
                  <strong>Taken on:</strong> {data.dates.taken}
                </Text>
              }
              {typeof (data.views) !== 'undefined' && data.views >= 0 &&
              <Text type="span">
                <strong>Views:</strong> {data.views}
              </Text>
              }
            </InfoBox>
          </DetailContainer>
        }
        {this.props.imageData.isLoading &&
          <FullWidthWrapper>
            <Loader />
          </FullWidthWrapper>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  imagesGallery: state.imagesGallery,
  imageData: state.imageData,
});

export default connect(mapStateToProps)(ImageDetail);
