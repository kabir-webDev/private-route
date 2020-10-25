import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowCompo from './ShowCompo';
import Compo from './Compo';
import Condi from './Condi';
import CheckAuth from './CheckAuth';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <h2>Here is Info:</h2>
      {/* <ShowCompo/> */}
    
     {/* <Condi isAuth={isAuth} setIsAuth={setIsAuth}>

     </Condi> */}
     <CheckAuth/>
     
     <Compo/>
    </div>
  );
}


export default App;
