import React, { useState } from "react";

export default function Home(props) {
  const [text, setText] = useState("enter text here");
  const uppercase = () => {
    let upper = text.toUpperCase();
    setText(upper);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const lowercase = () => {
    let lower = text.toLowerCase();
    setText(lower);
  };
  
  const clearText = () => {
    let cleartext = ''
    setText(cleartext);
  };
  

  return (
    <><div className="container">
      <div className="containetr" style={{color:props.mode==='dark'?'white':'#041E42'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3 ">
          <textarea style={{backgroundColor:props.mode==='dark'?'#041E42':'white', color:props.mode==='dark'?'white':'#041E42'}}
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={uppercase}>
            Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={lowercase}>
           Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={clearText}>
           cleartext
          </button>

        </div>
      </div>
      

      <h2 style={{color:props.mode==='dark'?'white':'#041E42'}}>Preview</h2>
      <p style={{color:props.mode==='dark'?'white':'#041E42'}}>{text}</p>
      <p style={{color:props.mode==='dark'?'white':'#041E42'}}>the number of charecters : {text.length}</p>
      <p style={{color:props.mode==='dark'?'white':'#041E42'}}>the number of words : {text.split(" ").filter((Element)=> {return Element.length!==0}).length}</p>
      <p style={{color:props.mode==='dark'?'white':'#041E42'}}>times to read : { 0.008*text.split(" ").length} </p>
      </div>
    </>
  );
}
