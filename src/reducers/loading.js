const loadReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADED':
      return !state;
    default:
      return state;
  }
};

export default loadReducer;
