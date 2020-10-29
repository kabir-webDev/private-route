import React from 'react'
import { useStateValue } from '../src/StateProvider';

function Compo() {
  const [{store}, dispatch] = useStateValue();

  const loginToApp = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_USER",
      details:{
        name: "Kabir",
        id: "328",
        year: "10th"
      }
    });
  };

  
    return (
        <div>
            <button onClick={loginToApp}>LogIn</button>
        </div>
    )
}

export default Compo
