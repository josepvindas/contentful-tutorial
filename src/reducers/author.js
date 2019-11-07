const authorReducer = (state = 'None', action) => {
  switch (action.type) {
    case 'AUTHOR':
      state = action.data;
      return state;
    default:
      return state;
  }
};

export default authorReducer;
