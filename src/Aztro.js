import React, {Component} from 'react'

// import ReactLoading from "react-loading"


import Sign from './components/sign';
import GeneralInfo from './components/generalInfo/generalInfo';
import Description from './components/description/description';
import MyLoader from './components/loader/loader';
import icons from './images.js'
import  './Aztro.css'
// import MyHook from './components/hooks/myHook';
// import UserLogin from './components/hooks/userLogin';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {},
          isLoading:false,
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
    async handleClick(e) {
    
        this.setState({
            urlFrag:  await e.target.value.toLowerCase(),
            isLoading:true
        })
        setTimeout(_ => {
            this.getSign(this.state.urlFrag) 
          }, 1000); // 1 second
          
    }

    getSign(query) {
        
        const url = `https://aztro.sameerkumar.website/?sign=${query}&day=today`;
        fetch(url, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { 
            json && this.setState({
                json,
                isLoading:false
            }); });
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
                        style={{width:110,margin:'10px'}}>Get Reading
                    </button>
                </div>) 
            }
            })

        return (
          <div className='container' >
          
          {this.state.isLoading && <MyLoader />}
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