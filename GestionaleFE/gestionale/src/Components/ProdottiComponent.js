import React, { Component, useState } from 'react'



  

const Prodotti = ({ prodotti, GetProdottiByNome }) => {
    const [nameC, setNameC] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nameC)
        GetProdottiByNome(nameC)
    }
    
    
    return (
        <div id='corpo'>
            <h1>Prodotti</h1>
            {/* {prodotti.id} */}
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col">Giacenza</th>
                    </tr>
                </thead>
                {prodotti && prodotti.length > 0 && prodotti.map((prodotto) => (
                <tbody key={prodotto.id}>
                    <tr>
                        <th scope="row">{prodotto.id}</th>
                        <td>{prodotto.nome}</td>
                        <td>{prodotto.descrizione}</td>
                        <td>{prodotto.giacenza}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>

        
    )
    };
export default Prodotti;