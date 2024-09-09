import * as React from "react"

function Medal(props) {
    
  return (
    <li>{props.medal.name} Medals&nbsp;
      <button disabled={props.country[props.medal.name] === 0} onClick={() => props.onDecrement(props.country.id, props.medal.name)}>-</button>&nbsp;
      {props.country[props.medal.name]}&nbsp;
      <button onClick={() => props.onIncrement(props.country.id, props.medal.name)}>+</button></li>
  )
}

export default Medal