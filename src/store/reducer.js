const initialState = {
  age: 20,
  history: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      // newState.age += action.value;

      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };
      break;

    case "AGE_DOWN":
      // newState.age += action.value;
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };
      break;

    case "DEL_ITEM":
      // newState.age += action.value;
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)

      };
      break;


  }
  return newState;
};

export default reducer;
