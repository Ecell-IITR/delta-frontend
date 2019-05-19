const student = {
  img_src: "./favicon.ico",
  img_size: "medium",
  name: "Rahul Jain",
  branch: "Electrical Engineering",
  year: "1st Year",
  course: "B.Tech",
  roll: 18115075,
  profilePercentage: 44,
  qualities:
    " One of the strange and wonderful features of my job as a minister is that I get to be a confidant and advisor to people at all stages of life. I’ve worked with people who are double and even triple my age. Experience like this is rare; our economic structure and workforce are stratified, and most people are employed within their own demographics.`"
};

const studentInfo = (state = " ", action) => {
  state = { ...student };
  let info;
  switch (action.type) {
    case "RENDER_INFO":
      info = { ...state };
      return info;
    default:
      return state;
  }
};

export default studentInfo;
