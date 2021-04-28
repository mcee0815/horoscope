


const GeneralInfo = (props) => {
    
    let styles={
        div:{
            display:'flex',
            flexDirection:'column',
            // boxShadow: 'grey 0px 5px 9px 0px',
            boxSizing:'border-box',
            width:'50%',
            padding:5,
            margin:'0 auto',
            background:'yellow',
            margin:7,
            textAlign:'left',
            // lineHeight:0
        },
        p:{
            color:'black',
            margin:5,
        },
        h2:{
            color:'black',
            fontSize:'1.8em',
            marginTop:5,
            marginBottom:5,
        }
    }

    return(
        <div style={styles.div}>
            <h2 style={styles.h2}>General</h2>
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