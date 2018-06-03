// Actions
const LOAD_PHOTO = 'app/image/FETCH';
const RESET_PHOTO = 'app/image/RESET';

const initialState = {
  data: {},
  isLoading: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PHOTO:
      return Object.assign({}, state, {
        data: action.photo,
        isLoading: false,
      });
    case RESET_PHOTO:
      return initialState;
    default: return state;
  }
}

// Action Creators
export const loadPhotoDataSuccess = photo => ({
  type: LOAD_PHOTO,
  photo,
});

export const loadPhotoData = (id) => {
  const url = `/v1/image/${id}`;

  return dispatch => (
    fetch(
      url,
      { credentials: 'same-origin' },
    ).then(response => response.json())
      .then((res) => {
        dispatch(loadPhotoDataSuccess(res.photo));
      })
      .catch((error) => {
        throw (error);
      })
  );
};

export const resetPhoto = () => ({
  type: RESET_PHOTO,
});