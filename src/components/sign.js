


const Sign = (props) => {
    
    let styles={
        div:{
            display:'flex',
            flexDirection:'column',
            boxShadow: 'grey 0px 5px 9px 0px',
            alignItems:'center',
            width:'95px',
            padding:10,
            margin:'0 auto',
            background:'yellow'
        },
        img:{
            width:'60px'
        },
        p:{
            color:'green'
        }
    }

    return(
        <div style={styles.div}>
        {props.click}
            <img style={styles.img} src={props.icon}></img>
            <p style={styles.p}>{props.name}</p>
        </div>
    )
}
export default  Sign