import React from 'react'

function Condi({isAuth, setIsAuth}) {
console.log(isAuth);
    return (
        <div style={{background: isAuth? "green" : "red"}}>
            <h1>I am Logged in </h1>
            {
                isAuth? (<button onClick={()=>setIsAuth(false)} >Logout</button>) : (<button onClick={()=>setIsAuth(true)} >Login</button>)
            }
            
        </div>
    )
}

export default Condi
