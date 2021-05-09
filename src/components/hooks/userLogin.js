import React from 'react'



const UserLogin = () => {
    
    const [isLogged, setState] = React.useState(false)
    const handleClick = () => {
        setState(!isLogged)
        
    } 

    return(
        <div>
            {isLogged ? <h3>Sign Out</h3>: <h3>Sign In</h3>}
            <button onClick = {() => setState(!isLogged) }>{isLogged ? 'Sign Out'  :'Sign In'}</button>
        </div>
        
        
    )
}

export default UserLogin;