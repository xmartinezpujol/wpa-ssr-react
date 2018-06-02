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
npm run start:dev
```

Run Storybook (UI Explorer) at http://localhost:6006
``` shell
npm run storybook
```

Build Storybook Static
``` shell
npm run build-storybook
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

* Coverage is always on, you can check also reports in /coverage/lcov-report/index.html.

* Snapshot testing is also included.

* E2E tests will be done in Cypress (pending).

* Sentry is enabled to track errors on development phase, add another integretion on production to track real-time error data.

### Dev steps

1) Dev/Prod environtment setup.
2) Design and structure of the components layout (cont vs pres), wireframes, etc.
3) Storybook up & running + first stateless components. Mocked info.
4) First tests Unit & Int. Leave Cypress ready in case I have time for E2E.
5) App in Node/Express to render the first component. See if glamor can be SSR for CSS (rehydrate).
6) Leave routing ready in client/server.
7) Create a Grid/List, check infinite loading with mocked data.
8) Add Flickr API to replace mocked data (Node API).
9) Add Redux/Redux-thunk for fetching data in client.
10) Master - Detail: image detail transition + info.
11) Animations
12) Responsive/Compatibility check.

### Considerations

* ESLint + AirnBnB Styleguide is used for code linting.

* I added React Router for routing to scale this app in the future.

* Storybook is used for component development, following the Component Driven Design (CDD) mindset. Snapshots and UI testing could be added there also. This is a common ground with designers also to improve the companies visual Styleguide and use it as a UI Explorer.

## Refactoring / Improvements

* Lists should be virtualized, if I had more time I would use collections/masonry from react-virtualized to load images for better performance.

* Cover error cases, API failed req, Flickr API, etc. Track errors + log + show user info.

* Bundles could be splitted using Webpack's code-splitter (chunks).

* Build process needs a bit more work. Dev environtment could be run also in Docker.

* ARIA

### Tech Stack
ReactJS, Redux, Storybook, NodeJS, Express, Webpack4, Jest, Enzyme, Cypress.