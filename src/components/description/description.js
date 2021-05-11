
import "./description.css"

const Description = (props) => {
    
    let styles={
        div:{
            display:'flex',
            flexDirection:'column',
            boxSizing:'border-box',
            width:'50%',
            padding:5,
            margin:'0 auto',
            background:'#ff5023',
            boxShadow: 'grey 0px 5px 9px 0px',
            margin:7,
        },

        h3:{
            color:'white',
            marginBottom:0,
            marginTop:-5,
            fontSize:'1.8em',
            textAlign:'left',
            padding:5
        },

        p:{
            color:'white',
            textAlign:'left',
            marginTop:5,
            lineHeight:1.5,
            paddingLeft:5
        }
    }

    return(
        <div className='description-animate' style={styles.div}>
            <h3 style={styles.h3}>Details</h3>
            <p style={styles.p}> {props.description}</p>
        </div>
    )
}
export default  Description