// Actions
const FETCH_CVE = 'nightgraph/global/cve/FETCH';
const SET_CVE = 'nightgraph/global/cve/SET';

const initialState = {
  companyId: null,
  venueId: null,
  eventId: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CVE:
      return state;
    case SET_CVE:
      return Object.assign(
        {},
        state,
        {
          companyId: action.companyId,
          venueId: action.venueId,
          eventId: action.eventId,
        },
      );
    default: return state;
  }
}

// Action Creators
export const fetchCVE = () => ({
  type: FETCH_CVE,
});

export const setCVE = (companyId, venueId, eventId) => ({
  type: SET_CVE,
  companyId,
  venueId,
  eventId,
});
