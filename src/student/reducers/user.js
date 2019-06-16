import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  UPLOAD_USER_IMAGE_FAILURE,
  UPLOAD_USER_IMAGE_REQUEST,
  UPLOAD_USER_IMAGE_SUCCESS
} from "../constants/index";
const initialState = {
  userActions: {
    isuploading: false,
    isfetching: false,
    isinitializing: false,
    errors: ""
  },
  userDetails: {
    username: "",
    email: "",
    id: ""
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        userActions: {
          isuploading: true
        }
      };
    case UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        userActions: {
          isuploading: false,
          errors: "Something went wrong!"
        }
      };
    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        userActions: {
          isuploading: false
        }
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        userActions: {
          isfetching: true
        }
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userActions: {
          isfetching: false
        },
        userDetails: {
          id: action.payload.id,
          email: action.payload.email,
          username: action.payload.username
        }
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        userActions: {
          errors: action.payload
        }
      };
    default:
      return state;
  }
};

export default user;
