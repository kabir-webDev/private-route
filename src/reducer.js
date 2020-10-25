export const initialState ={
	count: 0
};
  
  // Selector  
  const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
	  case "COUNT":
		return {
			count : action.val
		};

	  default:
		return state;
	}
  };
  
  export default reducer;