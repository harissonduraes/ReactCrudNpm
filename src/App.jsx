import React, { useState } from "react";
import { Body, Card, DisplayFlex } from "./jss";
import Button from "./Button";
import Form from "./Form";
import ButtonDelete from "./ButtonDelete";

const App = () => {
    const [data, setData] = useState("");
    const [formType, setFormType] = useState("");

    React.useEffect(() => {
        fetch("https://localhost:7282/api/cad-pessoa")
            .then((response) => response.json())
            .then((dataJson) => setData(dataJson))
    }, []);

    return (
        <Body>
            <DisplayFlex flexDirection={"column"}>
                <Button formType={"Create"} setFormType={setFormType} />
                <Button formType={"Read"} setFormType={setFormType} />
                <Button formType={"Update"} setFormType={setFormType} />
            </DisplayFlex>

            {formType == "Create" && <Form formType={formType} />}

            {data && data.map((pessoa, index) => (
                <Card key={index} >
                    <h2>Nome: {pessoa.nome}</h2>
                    <p>Idade: {pessoa.idade}</p>
                    <p>Peso {pessoa.peso}</p>
                    <p>Altura {pessoa.altura}</p>

                    <DisplayFlex>
                        <ButtonDelete formType={"Delete"} id={pessoa.id} />
                        {/* <Button formType={"Delete"} id={pessoa.id} /> */}
                    </DisplayFlex>

                    {formType == "Update" && <Form formType={formType} id={pessoa.id} />}
                </Card>
            ))}
        </Body>
    );
}

export default App;