import React, {Component} from 'react'

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {},
          urlFrag:'gemini',
          signs:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
       
    }
    getSign(urlFrag) {
        const url = `https://aztro.sameerkumar.website/?sign=${urlFrag}&day=today`;
        fetch(url, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { 
            console.log(json)
            this.setState({json}); });
    }

    handleClick(e) {
        this.setState({
            urlFrag:e.target.value
        })
        this.getSign(this.state.urlFrag) 
    }

    render() {
        let signs = this.state.signs.map((sign,index) => {
            return (<button key={index} value={sign.toLowerCase()} 
        
            onClick={(e) => {
                this.handleClick(e)
            }}>{sign}</button>)
        })
        return (
          <div>
            <div style={{width:100,display:'flex',flexDirection:'column'}}>{signs}</div>
              Current Date: {this.state.json.current_date} <br />
              Compatibility: {this.state.json.compatibility} <br />
              Lucky Number: {this.state.json.lucky_number} <br />
              Lucky Time: {this.state.json.lucky_time} <br />
              Color: {this.state.json.color} <br />
              Date Range: {this.state.json.date_range} <br />
              Mood: {this.state.json.mood} <br />
              Description: {this.state.json.description} <br />
          </div>
        );
    }
}

export default Aztro;