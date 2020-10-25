export const initialState = {
	user:null,
	cars: {
		// car1: { name: 'Honda', price: 100 },
		// car2: { name: 'BMW', price: 150 },
		// car3: { name: 'Mercedes', price: 200 }
		name: [],
		price: [],
	}
  };
  
  // Selector  
  const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
	  case "SET_USER":
		return {
			...state,
			user: action.user,
		};
		case "SET_CAR":
		  return {
			  ...state,
			  cars: action.car,
		  };

	  default:
		return state;
	}
  };
  
  export default reducer;