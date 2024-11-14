import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Copy Text Example with Toast</h1>
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

      {/* Toast container to display notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
