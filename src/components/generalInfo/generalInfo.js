
import "./generalInfo.css"

const GeneralInfo = (props) => {
    
    let styles={
        div:{
            display:'flex',
            flexDirection:'column',
            boxSizing:'border-box',
            width:'50%',
            paddingLeft:8,
            margin:'0 auto',
            background:'#51a0ff',
            margin:7,
            textAlign:'left',
            boxShadow: 'grey 0px 5px 9px 0px',
        },
        p:{
            color:'white',
            margin:5,
        },
        h3:{
            color:'white',
            fontSize:'1.8em',
            marginTop:5,
            marginBottom:5,
        },
    }

    return(
        <div className='general-animate' style={styles.div}>
            <h3 style={styles.h3}>General</h3>
            <p style={styles.p}>Compatibility: {props.compatibility}</p>
            <p style={styles.p}>Lucky Number: {props.luckyNumber}</p>
            <p style={styles.p}>Lucky Time:{props.luckyTime}</p>
            <p style={styles.p}>Color:{props.color}</p>
            <p style={styles.p}>Date Range: {props.dateRange}</p>
            <p style={styles.p}>Mood: {props.mood}</p>
        </div>
    )
}
export default  GeneralInfo