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
  };
  
    return (
        <div>
            <button onClick={loginToApp}>LogIn</button>
        </div>
    )
}

export default Compo
