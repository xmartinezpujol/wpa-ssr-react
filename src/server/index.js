import express from 'express';

import gallery from './views/gallery';

const index = express();

index.use('/assets', express.static('assets'));

index.get('/', (req, res) => {
  res.send(gallery());
});

index.listen(8080);
