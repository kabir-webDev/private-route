export const initialState = {
	name: [],
	id:[]
	
  };
  
  // Selector  
  const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
	  case "COUNT":
		return {
		  ...state,
		  name: [...state.name, action.item.name],
		  id: [...state.id, action.item.id]
		};
		case "DISCOUNT":
		  return {
			...state,
			name: [...state.name, action.item]
		  };
	  
	  default:
		return state;
	}
  };
  
  export default reducer;