import React from 'react'

function Header(props) {

    return (
        <div style={{ backgroundColor : "red"}}>
            <h1>Counter: {props.cacat}</h1>
            <h2>{props.children}</h2>
        </div>
    )
}


export default Header