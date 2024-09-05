import React, { useState } from "react";
import { Body, Card, DisplayFlex } from "./css";
import Buttons from "./Button";
import Form from "./Form";

const App = () => {
    const [data, setData] = useState("");
    const [formType, setFormType] = useState("");

    React.useEffect(() => {
        fetch("https://localhost:7282/api/cad-pessoa")
            .then((response) => response.json())
            .then((dataJson) => setData(dataJson))
    }, []);
    //console.log(formType);

    return (
        <Body>
            <DisplayFlex props={"row"}>
                <Buttons formType={"Create"} setFormType={setFormType} />
                {/* <Buttons formType={"Read"} setFormType={setFormType} /> */}
                <Buttons formType={"Update"} setFormType={setFormType} />
                <Buttons formType={"Delete"} setFormType={setFormType} />
            </DisplayFlex>

            <Form formType={formType} setFormType={setFormType} />

            {data && data.map((pessoa, index) => (
                <Card key={index}>
                    <p>Id: {pessoa.id}</p>
                    <h2>Nome: {pessoa.nome}</h2>
                    <p>Idade: {pessoa.idade}</p>
                    <p>Peso {pessoa.peso}</p>
                    <p>Altura {pessoa.altura}</p>
                </Card>
            ))}
        </Body>
    );
}

export default App;