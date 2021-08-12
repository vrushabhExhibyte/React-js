const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};
export default todoReducers;
