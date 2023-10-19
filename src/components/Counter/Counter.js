"use client";
import React from "react";
import Spinner from "../Spinner/Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    let savedValue = window.localStorage.getItem("saved-count");

    setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
    if (typeof count === "number") {
      window.localStorage.setItem("saved-count", count);
    }
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count {typeof count === "number" ? count : <Spinner />}
    </button>
  );
}

export default Counter;
