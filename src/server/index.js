import express from 'express';
import bodyParser from 'body-parser';

// Services
import getFlickrImages from '../services/getFlickrImages';

// Views
import gallery from './views/gallery';

const app = express();

// Flickr API
const IMG_PER_PAGE = 18;

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// SPA Client serve
app.get('/', (req, res) => {
  res.send(gallery());
});

// Gallery API
app.get('/v1/gallery/images/:page', (req, res) => {
  const { page } = req.params;
  getFlickrImages(IMG_PER_PAGE, page, res);
});

app.listen(8080);