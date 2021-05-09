import React from 'react'



const MyHook = () => {
    // let stateVal = false;
    const [val, setState] = React.useState(false)
    const handleClick = () => setState(!val)

    return(
        <div>
        <h2>My Hook</h2>
        {val && <h1>YES!!</h1>}
        <button onClick = {handleClick}>Click</button></div>
        
        
    )
}

export default MyHook;