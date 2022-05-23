import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  DELETE_EXPERIENCE,
  DELETE_EQUIPMENT,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case DELETE_EQUIPMENT:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profile;
