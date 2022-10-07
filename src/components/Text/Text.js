import React from 'react';
import "./Text.scss"

const Text = (props) => {

    return (
        <div className={"text"}>
            <p>{props.content}</p>
        </div>
    );
};

export default Text;