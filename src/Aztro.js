import React, {Component} from 'react'

import Sign from './components/sign';
import GeneralInfo from './components/generalInfo';
import Description from './components/description';
import icons from './images.js'
import  './Aztro.css'

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {},
          urlFrag:'',
          icons:[],
          signs:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
          
        }

        this.handleClick = this.handleClick.bind(this)
        this.getSign = this.getSign.bind(this)
    }

    async componentDidMount () {
        this.setState({
            icons: await icons
        })
    }

    getSign(query) {
        const url = `https://aztro.sameerkumar.website/?sign=${query}&day=today`;
        fetch(url, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { 
            json && this.setState({json}); });
    }

    async handleClick(e) {
    
        this.setState({
            urlFrag:  await e.target.value.toLowerCase()
        })
          this.getSign(this.state.urlFrag) 
    }
   
    render() {
        let iconSet = this.state.icons.map((icon,index) => { 
  
            for (let i = 0; i < this.state.signs.length; i++) {
                const signValue = this.state.signs[index];
                
                return (
                <div>
                    <Sign icon={icon.icon}  name={icon.name} />
                    <button 
                        value={signValue} onClick={(e) => this.handleClick(e)}
                        style={{width:110,margin:'10px'}}>{signValue}
                    </button>
                </div>) 
            }
            })

        return (
          <div className='container' >
              <div className='icon-wrap'>{iconSet}</div>
              
              <div className='info-box'>
              <GeneralInfo 
                        compatibility={this.state.json.compatibility}
                        luckyNumber={this.state.json.lucky_number}
                        luckyTime={this.state.json.lucky_time}
                        color={this.state.json.color}
                        dateRange={this.state.json.date_range}
                        mood={this.state.json.mood} 
                        />
                <Description description={this.state.json.description} />
                
              </div>

              
          </div>
        );
    }
}

export default Aztro;