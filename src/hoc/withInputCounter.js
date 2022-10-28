import React from "react";


export const withInputCounter = (Component, max) => {
  const CounterComponent = (props) => {
    return <>
      <Component {...props} />
      <div className="form-counter">
        <span className="current">0</span>/<span className="max">{max}</span>
      </div>
    </>
  }

  return CounterComponent;
}