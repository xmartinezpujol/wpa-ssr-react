# Image Gallery REST API - ReactJS, Redux, NodeJS, Express

### Client / Server localhost
Node/NPM required to install dependencies.

Clone rep
``` shell
git clone https://github.com/xmartinezpujol/simple-restapi.git
```

Install dependencies
``` shell
npm install
```

Run Server (API) at http://localhost:8080
``` shell
npm run api
```

Run Client (ReactJS App) at http://localhost:3000
``` shell
npm start
```

Make Production Bundle
``` shell
npm run prod
```


### API URLs

Direct link to image file
```
http://localhost:8080/oriental/sushi.jpg
```

### Testing

* Unit / Integration tests are done in Jest/Enzyme at a component level. To run tests, use:

``` shell
npm run test
```

* Snapshot testing is also included.

* E2E tests will be done in Cypress (pending).

* Sentry is enabled to track errors on development phase, add another integretion on production to track real-time error data.



### Considerations

* I added React Router for routing to scale this app in the future.

* Storybook is used for component development, following the Component Driven Design (CDD) mindset. Snapshots and UI testing could be added there also. This is a common ground with designers also to improve the companies visual Styleguide and use it as a UI Explorer.



### Tech Stack
ReactJS, NodeJS, Express, Webpack3 + DevServer, SASS, Pug(Jade).