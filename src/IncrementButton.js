function IncrementButton(props) {

    return (
        <div style={{ backgroundColor: "lightgreen" }}>
            <div>Increment Button</div>
            <button className="button" onClick={props.incrementFunction}>+</button>
        </div>
    )
}


export default IncrementButton