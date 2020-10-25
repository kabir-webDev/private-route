import React from 'react'
import {useStateValue} from "./StateProvider";
function CheckAuth() {
    
  const [{user,cars}, dispatch] = useStateValue();
console.log(cars.name);
    return (
        <div>
            {
                user? `Logged in as ${user} & He has ${cars.name} & Price is ${cars.price}` : 'Not Logged in'
            }
        </div>
    )
}

export default CheckAuth
