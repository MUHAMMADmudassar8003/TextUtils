import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    props.showAlert("Text Converted to UpperCase!","succes")
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    props.showAlert("Text Converted to Lowercase!","succes")
    setText(newText);
  };
  const handleClearClick = () => {
    let newText =('');
    props.showAlert("Text Cleared!","succes")
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lower Case </button>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text </button>
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h1>Your Summary Here</h1>
      <p>{text.split(" ").length} Words And {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  );
}
