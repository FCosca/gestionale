import React, { Component, useState } from 'react'



  

const Prodotti = ({ prodotti, GetProdottiByNome, GetProdottiOrderByDecre, GetProdottiOrderByCres, DeleteProdotto, settaProdotti }) => {
    const [ord , setOrd] = useState("")
    const [nameC, setNameC] = useState("")
    const [descrizioneC, setDescrizioneC] = useState("")
    const [giacenzaC, setGiacenzaC] = useState(0)


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nameC)
        GetProdottiByNome(nameC)
    }

    function Insert(e){
        e.preventDefault();
        console.log(nameC)
        console.log(descrizioneC)
        console.log(giacenzaC)
        settaProdotti(nameC,descrizioneC,giacenzaC)
        setNameC("");
        setDescrizioneC("")
        setGiacenzaC(0)



    }

    function Ordine(e){
        e.preventDefault()
        if(ord == ""){
            GetProdottiOrderByDecre()
            setOrd("DECRE")
        }
        if(ord == "DECRE"){
            GetProdottiOrderByCres()
            setOrd("CRE")
        }
        if(ord == "CRE" ){
            GetProdottiOrderByDecre()
            setOrd("DECRE")
        }
    }

    function Delete(id){
        console.log(id)
        DeleteProdotto(id)
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

            <form onSubmit={Insert}>
                <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Descrizione" aria-label="Nome" aria-describedby="basic-addon1" value={descrizioneC} onChange={e => setDescrizioneC(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Giacenza" aria-label="Nome" aria-describedby="basic-addon1" value={giacenzaC} onChange={e => setGiacenzaC(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col" onClick={Ordine}>Giacenza</th>
                    </tr>
                </thead>
                {prodotti && prodotti.length > 0 && prodotti.map((prodotto) => (
                <tbody key={prodotto.id}>
                    <tr>
                        <th scope="row">{prodotto.id}</th>
                        <td>{prodotto.nome}</td>
                        <td>{prodotto.descrizione}</td>
                        <td>{prodotto.giacenza}</td>
                        <td><button onClick={e => Delete(prodotto.id)}>rimuovi</button></td>

                    </tr>
                </tbody>
                ))}
            </table>
        </div>

        
    )
    };
export default Prodotti;