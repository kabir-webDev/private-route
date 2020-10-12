import React from 'react'
import { useStateValue } from '../src/StateProvider';

function Compo({ number }) {
  const [{ name }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "COUNT",
      item: {
        name:"Kabir",
        id:12
      },
    });
  };
  const removeFromBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "DISCOUNT",
      item: " Hasan",
    });
  };
    return (
        <div>
            <button onClick={addToBasket}>Add to Basket</button>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    )
}

export default Compo
