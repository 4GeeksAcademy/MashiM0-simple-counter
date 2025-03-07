import React from "react";

const Counter = (props) =>{
    return (
        <div className="Bigbox">
            <div className="container d-flex justify-content-center fs-1 font-monospace mb-5 p-2">
                <div className="card m-2 p-2">{props.seconds4}</div>
                <div className="card m-2 p-2">{props.seconds3}</div>
                <div className="card m-2 p-2">{props.seconds2}</div>
                <div className="card m-2 p-2">{props.seconds}</div>
            </div>
        </div>
    );
}

export default Counter