import React from 'react'
import {useStateValue} from "./StateProvider";
function CheckAuth() {
    
  const [{user}, dispatch] = useStateValue();

    return (
        <div>
            {
                user? `Logged in as ${user}` : 'Not Logged in'
            }
        </div>
    )
}

export default CheckAuth
