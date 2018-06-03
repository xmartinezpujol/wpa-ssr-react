// Actions
const LOAD_PHOTOS = 'app/gallery/images/FETCH';
const RESET_PHOTOS = 'app/gallery/images/RESET';

const initialState = {
  photos: [],
  page: 1,
  pages: 0,
  perPage: 0,
  isLoading: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PHOTOS:
      return Object.assign({}, state, {
        photos: state.photos.concat(action.photos.photo),
        page: action.photos.page,
        pages: action.photos.pages,
        perPage: action.photos.perPage,
        isLoading: false,
      });
    case RESET_PHOTOS:
      return initialState;
    default: return state;
  }
}

// Action Creators
export const loadPhotosSuccess = photos => ({
  type: LOAD_PHOTOS,
  photos,
});

export const loadPhotos = (page) => {
  const url = `/v1/gallery/images/${page}`;

  return dispatch => (
    fetch(
      url,
      { credentials: 'same-origin' },
    ).then(response => response.json())
      .then((res) => {
        dispatch(loadPhotosSuccess(res.photos));
      })
      .catch((error) => {
        throw (error);
      })
  );
};

export const resetPhotos = () => ({
  type: RESET_PHOTOS,
});

