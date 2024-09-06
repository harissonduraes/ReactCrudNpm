import React, { useState } from "react";

const handleSubmitDelete = (id) => {

    let Id = {
        id: id
    }

    fetch("https://localhost:7282/api/cad-pessoa/delete", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Id)
    })
        .finally(() => window.location.reload(true));
}

const ButtonCard = (
    props
) => {
    // const [id, setId] = React.useState("");

    return (
        <button onClick={() => handleSubmitDelete(props.id)}>{props.formType}</button>
    );
}

export default ButtonCard;