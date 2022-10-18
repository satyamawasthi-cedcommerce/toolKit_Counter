import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addByVlaue, reduceeByValue } from "./features/counter/counterSlice";

function Counter() {
  const[inputVal, setInputVal] = useState(0);
  const val = Number(inputVal) || 0;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
      <div>
        <div>
          <h2>{count}</h2>
          <button
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>{" "}
          <button
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button><br/>
          <h3>Enetr a value to be added or deducted</h3>
          <input type="number" onChange={(event) => setInputVal(event.target.value)} value={inputVal}/><br/>
          <button onClick={()=> dispatch(addByVlaue(val))}>Add</button>{" "}
          <button onClick={()=> dispatch(reduceeByValue(val))}>Substract</button>
        </div>
      </div>
  );
}

export default Counter;
