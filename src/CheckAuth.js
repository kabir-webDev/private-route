import React from 'react'
import {useStateValue} from "./StateProvider";
function CheckAuth() {
    
  const [{store,id}, dispatch] = useStateValue();
    console.log(store.item);
    return (
        <div>
            Nothing is here...
        </div>
    )
}

export default CheckAuth
