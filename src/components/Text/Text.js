import React from 'react';
import "./Text.scss"

const Text = () => {
    const text = "Component text"

    return (
        <div className={"text"}>
            {text}
        </div>
    );
};

export default Text;