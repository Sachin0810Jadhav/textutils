import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log('uppercase was clicked');
    setText(text.toUpperCase());
    props.showAlert("Uppercase is enabled", "success");
  };

  const handleLowClick = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("Lowercase is enabled", "success");
  };

  const handleOnChange = (event) => {
    // console.log('on change');
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("text cleared", "success");
  };
  const handleSentClick = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    props.showAlert("Sentencecase is enabled", "success");
  };

  const handleCopyClick=()=>{
    var text = document.getElementById("mybox");

    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied",'success');

    
  }

  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <h3>{props.title}</h3>
          <textarea
            className="form-control"
            data-bs-theme={props.mode}
            id="mybox"
            rows={8}
            value={text}
            onChange={handleOnChange}
            placeholder="enter text here"
          />
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-2 mx-2"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  my-2 mx-2"
          onClick={handleSentClick}
        >
          sentence case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          clear
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopyClick}
        >
          Copy
        </button>

        <div className="container my-2">
          <h2>Text Summary:</h2>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            time ={" "}
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008}
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "nothing to preview"}</p>
        </div>
      </div>
    </>
  );
}
