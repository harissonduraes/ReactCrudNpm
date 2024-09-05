import React from "react";

const Button = (
    props
) => {

    return (
        <button onClick={() => props.setFormType(props.formType)}>{props.formType} </button>
    );
}

export default Button;