const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'BOOK':
      state = action.data;
      return state;
    default:
      return state;
  }
};

export default bookReducer;
