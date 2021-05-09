import React from 'react';
import ReactLoading from "react-loading"

//     z-index: 3;
//     margin: 0px auto;
//     background: #0000005e;
//     width: 100%;
//     height: 100%;
//     position: absolute;
// }

let styles = {
    boxSizing:'border-box',
    padding:10,
    // background: '#0000005e',
    zIndex:3,
    margin:'0 auto',
    position:'absolute',
    width: '100%',
    height: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes

const MyLoader = () => {
    return(
        <div style={styles}>{<ReactLoading type="spinningBubbles" color="#f5670f" height="150px" width="150px"   />}</div>
    )
}

export default MyLoader;