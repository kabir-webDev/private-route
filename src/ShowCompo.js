import React from 'react'
import { useStateValue } from '../src/StateProvider';

function ShowCompo() {
    
  const [{ count }, dispatch] = useStateValue();
    return (
        <div>
            {count}
        </div>
    )
}

export default ShowCompo
