// Mocking time
import Photos from '../mocks/photos';

const getFlickrImages = () => {
  return new Promise((resolve, reject) => {
    resolve(Photos.oriental.photos);
  });
};

export default getFlickrImages;
