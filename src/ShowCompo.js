import React from 'react'
import { useStateValue } from '../src/StateProvider';

function ShowCompo() {
    
  const [{ name,id }, dispatch] = useStateValue();
    return (
        <div>
            {id} <br/>{name}
        </div>
    )
}

export default ShowCompo
