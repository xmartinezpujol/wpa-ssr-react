import axios from 'axios';

const API_KEY_FLICKR = 'a851f8262dd41c2f1ca5ab13fa8b436d';

const getFlickrImageData = (id, res) => {
  axios
    .get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY_FLICKR}&format=json&nojsoncallback=1&photo_id=${id}`)
    .then((response) => {
      const json = response.data;
      res.send(json);
    })
    .catch((err) => {
      res.send(err);
    });
};

export default getFlickrImageData;
