import axios from 'axios';

const API_KEY_FLICKR = 'a851f8262dd41c2f1ca5ab13fa8b436d';

const getFlickrImages = (perPage, page, res) => {
  axios
    .get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY_FLICKR}&format=json&nojsoncallback=1&per_page=${perPage}&page=${page}`)
    .then((response) => {
      const json = response.data;
      res.send(json);
    })
    .catch((err) => {
      res.send(err);
    });
};

export default getFlickrImages;
