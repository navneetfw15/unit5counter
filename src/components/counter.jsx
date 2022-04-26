import { useState } from "react";
import "./counter.css"

const Counter=()=>{
    const [counter,setCounter]=useState(0);
     if (counter < 0) {
         setCounter(0)
     }
    const handleChange = (val) => {
       
      setCounter(counter + val);
    };
    const handle=(val)=>{
        setCounter(counter * val);
    }
    return (
      <div className="maindiv">
        <h3>
          Counter : <span className={counter % 2 === 0 ? "even" : "odd"}>{counter}</span>
        </h3>
        <button
          onClick={() => {
            handleChange(1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            handleChange(-1);
          }}
        >
          Substarct
        </button>
        <button
          onClick={() => {
            handle(2);
          }}
        >
          Double
        </button>
      </div>
    );
}

export {Counter}