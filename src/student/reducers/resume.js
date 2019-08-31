const VIEW_RESUME = 'VIEW_RESUME'

const initialState = {
  file: []
}

const resume = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_RESUME':
      return {
        ...state,
        file: action.payload
      }
    default:
      return { ...state }
  }
}

export default resume
