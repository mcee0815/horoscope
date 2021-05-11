
import './App.css';
import Aztro from './Aztro'

function App() {
  return (
    <div className="App">
    <div style={{marginBottom:25,width:'100%',margin:'0 auto'}}><h1 style={{fontSize:'4.0em',color:'green',marginBottom:-15,fontWeight:200}}>HOROSCOPE</h1>
      <h2 style={{color:'green',marginBottom:10,fontWeight:100,marginTop:8}}>Get your daily reading</h2>
    </div>
    
      <Aztro />
    </div>
  );
}

export default App;

