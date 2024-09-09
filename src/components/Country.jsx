import * as React from "react"
import Medal from "./Medal";

function Country(props) {
    function getMedalsTotal() {
        let sum = 0;
        props.medals.forEach(medal => { sum += props.country[medal.name]; });
        return sum;
      }


    return (
        <li>
          {props.country.name} | {getMedalsTotal()} | <button onClick={() => props.onDelete(props.country.id)}>Delete</button>
          <ol>
        {props.medals.sort((a, b) => a.rank - b.rank).map(medal =>
          <Medal
            key={medal.id}
            medal={medal}
            country={props.country}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        )}
      </ol>
        </li>
      )
}

export default Country