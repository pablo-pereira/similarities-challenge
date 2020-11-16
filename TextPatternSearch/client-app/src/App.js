import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [text,setText] = useState("");
  const [result,setResult] = useState(0);
  const [errorMsg,setErrorMsg] = useState("");



  useEffect(() => {
    console.log("mounted");
  },[]);

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('https://localhost:5001/TestString',[text])
      .then(res => {
        console.log(res);
        console.log(res.data);
        setResult(res.data[0]);
        if(res.data[0] == -1)//invalid text
          setErrorMsg("The entered text has errors.");
        else
        setErrorMsg("");
      })
  }

  

  return (
    <div className="container-lg app-body">
      <div className="row">
        <div className="col">
          <h1>Problem</h1>
          <p>For two strings A and B, we define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings "abc" and "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.
            <br/>Calculate the sum of similarities of a string S with each of it's suffixes.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <form onSubmit={handleSubmit}>              
              <div className="form-group">
                <label htmlFor="Textarea">Enter text to calculate the sum of similarities</label>
                <textarea className="form-control" id="Textarea" rows="3" value={text} onChange={e=>setText(e.target.value)}></textarea>                
              </div>
              <div className="form-group">
                <span>Result: {result}</span>
                <br/><span className="error">{errorMsg}</span>
              </div>
              <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
