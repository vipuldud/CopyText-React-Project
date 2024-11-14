import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // Function to handle text copying
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Copy Text Example</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter some text"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={handleCopy} style={{ padding: "10px", marginLeft: "10px" }}>
        Copy Text
      </button>
    </div>
  );
}

export default App;
