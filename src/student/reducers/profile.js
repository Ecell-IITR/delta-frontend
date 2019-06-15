const initialState = {
  info: {
    name: "Tushar Varshney",
    branch: "Production and Industrial",
    year: "2021",
    course: "Mechanical",
    roll: 17119035
  },
  isfetching: false
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return {
        ...state,
        isfetching: true
      };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        info: action.payload,
        isfetching: false
      };
    default:
      return state;
  }
};

export default profile;
