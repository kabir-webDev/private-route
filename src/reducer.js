export const initialState ={
	store: []
};
  
  // Selector  
  const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
	  case "ADD_USER":
		return {
			...state,
			store :[...state.store, action.details] ,
		};

	  default:
		return state;
	}
  };
  
  export default reducer;