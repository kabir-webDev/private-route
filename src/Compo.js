import React from 'react'
import { useStateValue } from '../src/StateProvider';

function Compo() {
  const [{count}, dispatch] = useStateValue();

  const loginToApp = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "COUNT",
      val: count-1
    });
  };

  
    return (
        <div>
            <button onClick={loginToApp}>LogIn</button>
        </div>
    )
}

export default Compo
