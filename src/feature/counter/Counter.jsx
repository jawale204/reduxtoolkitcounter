import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <div> {count}</div>
      <div onClick={() => dispatch(increment())}>+</div>
      <div onClick={() => dispatch(decrement())}>-</div>
    </div>
  );
}

export default Counter;
