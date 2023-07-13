import React,{useState} from 'react'

export default function TextForm(props){
  const handleUpConvert=()=>{
    console.log("uppercase was clicked "+text);
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleLowConvert=()=>{
    console.log("lowercase Wad clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleSpeak=()=>{
    let newText=new SpeechSynthesisUtterance();
    newText.text=text;
    speechSynthesis.speak(newText);
  }

  const handleClear=()=>{
    let newText="";
    setText(newText);
  }
  // unuseful feature created by me
  // const handleReplace=()=>{
  //   console.log("Replace I"+text);
  //   let newText=text.replaceAll("I","we");
  //   setText(newText);
  // }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
    
  }

  const handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("Kuhc to type kara");
  // setText("plz type ");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#56595b':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpConvert}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowConvert}>Convert to lowecase</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeak}>Speak</button> 
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleSpace}>RemoveSpace</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleReplace}>Replace</button> */}
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes time required to read words </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'enter something above to prview here'}</p>
    </div>
    </>
  )
}
