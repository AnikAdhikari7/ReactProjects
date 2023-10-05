import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addValue() {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Can't add more than 20...");
    }
    
  }

  function subValue() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Can't subtract less than 0...");
    }
  }

  // const addValue = () => {
  //   setCount(count + 1);
  // }

  // const subValue = () => {
  //   setCount(count - 1);
  // }

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Sub Value</button>
    </>
  );
}

export default App;
