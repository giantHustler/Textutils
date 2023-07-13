
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from 'react'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with atharva
//         </a>
//       </header>
//     </div>
//   );
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// in jsx we write html and instead of class we use classname (camelcasiling) and js will be written inside curely bracket
// instead of htmlfor

function App(){
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#56595b'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'

    }
  }
  return(
    <>
     {/* above is js fragement */}
        {/* <Navbar/> */}
    <Navbar title="Blog"  mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter your text here" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;    
