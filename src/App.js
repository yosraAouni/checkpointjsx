import React from 'react';
import './style.css';
import myImage from './2.jfif'
import myVideo from './3.mp4'

function App() {
  let name="Yosra Ouni"
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

          <h1 className="title red" >My name : {name}</h1>

          <br/>
          <div className="pic">
          <img src={myImage} alt="mypicture" />
          
          <img src="./1.jpg" alt="mypicture" style={{width:'25%',height:'10%'}}/>
          </div>

          </div>

          <video width="320" height="240" controls>

          <source src={myVideo} type="video/mp4"/>

          </video>
          
    </div>
  );
}

export default App;
