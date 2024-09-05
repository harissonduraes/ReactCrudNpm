import React from "react";
import { DisplayFlex } from "./css";


const Form = (
    { formType, setFormType }
) => {
    const [id, setId] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [idade, setIdade] = React.useState("");
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [dados, setDados] = React.useState("");

    // const dados = {
    //     id: id,
    //     nome: nome,
    //     idade: idade,
    //     peso: peso,
    //     altura: altura
    // }

    const handleDados = () => {
        switch (formType) {
            case 'Create': setDados({
                nome: nome,
                idade: idade,
                peso: peso,
                altura: altura
            });
                break;
            case 'Update': setDados({
                id: id,
                nome: nome,
                idade: idade,
                peso: peso,
                altura: altura
            });
                break;
            case 'Delete': setDados({
                id: id
            });
                break;
        }
    }


    //console.log(formType);

    console.log(dados);

    function handleSubmit(event) {
        event.preventDefault();

        let url = "";
        switch (formType) {
            case 'Create': url = "https://localhost:7282/api/cad-pessoa/create";
                break;
            case 'Update': url = "https://localhost:7282/api/cad-pessoa/update";
                break;
            case 'Delete': url = "https://localhost:7282/api/cad-pessoa/delete";
                break;
        }

        console.log(url);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <DisplayFlex props={"column"}>
                {(formType == 'Update' || formType == 'Delete') && <>
                    <label>Id</label>
                    <input type="text" onChange={(event) => setId(event.target.value)} />
                </>}
                {formType != 'Delete' && <>
                    <label>Nome: </label>
                    <input type="text" onChange={(event) => setNome(event.target.value)} />
                    <label>Idade</label>
                    <input type="number" onChange={(event) => setIdade(event.target.value)} />
                    <label>Peso</label>
                    <input type="number" onChange={(event) => setPeso(event.target.value)} />
                    <label>Altura</label>
                    <input type="number" onChange={(event) => setAltura(event.target.value)} />

                </>}
                <button onClick={() => handleDados()}>Criar</button>
            </DisplayFlex>
        </form>
    );
}

export default Form;