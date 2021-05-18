import React from 'react'

function DecrementButton(props) {

    return (
        <div style={{ backgroundColor: "lightblue"}}>
            <div>Decrement Button</div>
            <button className="button" onClick={props.decrementFunction}>-</button>
        </div>
    )
}


export default DecrementButton