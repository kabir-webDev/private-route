import React from 'react'
import {useStateValue} from "./StateProvider";
function CheckAuth() {
    
  const [{count}, dispatch] = useStateValue();

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default CheckAuth
