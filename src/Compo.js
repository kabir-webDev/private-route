import React from 'react'
import { useStateValue } from '../src/StateProvider';

function Compo() {
  const [state, dispatch] = useStateValue();

  const loginToApp = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "SET_USER",
      user: "Kabir Saheb"
    });
    dispatch({
      type: "SET_CAR",
      car: {name: "Farrari", price: "$12000"}
    });
    

  };

  const Bugatti = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "SET_CAR",
      car: {name: "Bugatti", price: "$10000"}
    });
    

  };
  const Chevrollate = () => {
    // dispatch the item into the data layer
    
    dispatch({
      type: "SET_CAR",
      car: {name: "Chevrollate", price: "$69000"}
    });
    

  };
  
    return (
        <div>
            <button onClick={loginToApp}>LogIn</button> <br/>
            <button onClick={Bugatti}>Bugatti</button> <br/>
            <button onClick={Chevrollate}>Chevrollate</button>
        </div>
    )
}

export default Compo
