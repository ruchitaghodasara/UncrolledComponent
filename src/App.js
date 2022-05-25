import "./styles.css";
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  function handleSubmit() {
    document.getElementById("inputText").innerHTML = inputRef.current.value;
    const para = document.createElement("p");
    para.innerText = inputRef.current.value;
    document.body.appendChild(para);
  }

  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" ref={inputRef} />
        <button type="submit">Submit</button>

        <label id="inputText"></label>
      </form>
    </div>
  );
}
