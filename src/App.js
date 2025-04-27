import { useState, useEffect } from "react";

function MyApp() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  /*
  useEffect(function () {
    getAdvice();
  }, []);
*/
  return (
    <div>
      <h1> Hello Dheeraj </h1>
      <p> {advice}</p>
      <button onClick={getAdvice}> Get Advice </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> peices of advice.
    </p>
  );
}

export default MyApp;
