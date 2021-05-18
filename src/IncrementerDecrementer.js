import React, { useState } from 'react';
import './style.css';
import Header from './Header'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'


function IncrementerDecrementer() {

    const [state, setState] = useState({
        count: 0,
        alert: false
    })

    const incrementFunction = () => {
        setState({ count: state.count + 1 });
    }

    const decrementFunction = () => {

        if (state.count === 0) {
            setState({ ...state, alert: true })
            setTimeout(() => setState({ ...state, alert: false }), 2000)
            return
        }
        setState({ count: state.count - 1 });
    }


    return (
        <div className="center">
            <Header cacat={state.count}>Filo</Header>

            {state.alert && <h4 style={{ backgroundColor: "aqua" }}>Cant go lower. Please increment!</h4>}
            <div className="btns">
                <IncrementButton incrementFunction = { incrementFunction }/>
                <DecrementButton decrementFunction = { decrementFunction }/>
                
            </div>
        </div>
    );

}

export default IncrementerDecrementer;