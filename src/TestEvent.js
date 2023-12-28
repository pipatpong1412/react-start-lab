import React from 'react';

export default function TestEvent() {
    const hdlClick = () => alert('click')

    const shoot = (msg, e) => {
        alert(msg)
        console.log(e.target)
    }

    return (
        <div className="test-event">
            <button onClick={hdlClick}> Click me</button>
            <button onClick={(e) => shoot('YO!!',e)}> Click me</button>
        </div>
    )
}