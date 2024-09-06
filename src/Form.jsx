import React from "react";
import { DisplayFlex } from "./jss";


const Form = (
    { formType, id }
) => {
    const [nome, setNome] = React.useState("");
    const [idade, setIdade] = React.useState("");
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [dados, setDados] = React.useState("");

    console.log(id);
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

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }).finally(() => window.location.reload())
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <DisplayFlex flexDirection={"column"}>
                {/* {formType == 'Update' && <>
                    <input type="text" value={Id} onChange={(Id) => setId(Id)} />
                </>} */}
                {/* {formType != 'Delete' && <> */}
                <label>Nome: </label>
                <input type="text" onChange={(event) => setNome(event.target.value)} />
                <label>Idade</label>
                <input type="number" onChange={(event) => setIdade(event.target.value)} />
                <label>Peso</label>
                <input type="number" onChange={(event) => setPeso(event.target.value)} />
                <label>Altura</label>
                <input type="number" onChange={(event) => setAltura(event.target.value)} />

                {/* </>} */}
                <button onClick={() => handleDados()}>{formType}</button>
            </DisplayFlex>
        </form>
    );
}

export default Form;