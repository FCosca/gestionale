import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById, GetDipendentiByNome, GetDipendentiByCognome, GetDipendentiByRuolo} from '../services/DipendentiService'
import { Link , Redirect, useHistory} from 'react-router-dom';


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [ruolo, setRuolo] = useState("")
    const [loading, setLoading] = useState(false)
    // const history = useHistory(); 
    // const [loadingTutto, setLoadingTutto] = useState(false)




    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data))
        
    }, [])




    const handleSubmit =(e)=>{
        e.preventDefault()
    
        console.log("handlesubmit",nome)
        
            GetDipendentiByNome(nome).then(data => setDipendenti(data));
            if(nome===""){
                     {console.log("dentro")}
                                ricarica()
    
                 }
             
    }


    const handleSubmitCognome=(e)=>{
        e.preventDefault()
        console.log("cognome", cognome)
        GetDipendentiByCognome(cognome).then(data=> setDipendenti(data));
        if(cognome===""){
            {console.log("dentro2")}
            ricarica()
        }

    }


    const handleSubmitRuolo=(e)=>{
        e.preventDefault()
        console.log("ruolo", ruolo)
        GetDipendentiByRuolo(ruolo).then(data=>setDipendenti(data));
        if(ruolo===""){
            {console.log("dentro3")}
            ricarica()
        }
    }

    const handleSubmitId=(e)=>{
        e.preventDefault()
        console.log("id", id)
        GetDipById(id).then(data=>setDipendenti(data));
        if(id===""){
            {console.log("dentro4")}
            ricarica()
        }
    }
    
    // function navigateToHome() {
    //     history.push("/dipendenti" );
    //   }

    async function ricarica(){
        
            const res = await GetDipendentiAll().then(data => setDipendenti(data));       

    }



    return(
        <>
            {/* <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button> */}
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={handleSubmitCognome}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >cognome</span>
                    <input type="text" className="form-control" placeholder="Cognome" aria-label="Cognome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={handleSubmitRuolo}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >Ruolo</span>
                    <input type="text" className="form-control" placeholder="Ruolo" aria-label="Ruolo" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={handleSubmitId}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >ID</span>
                    <input type="text" className="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1" value={id} onChange={e => setId(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            {console.log("return", dipendenti)}
            {/* {console.log(nome)} */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Ruolo</th>
                        <th scope="col">Stipendio</th>
                    </tr>
                </thead>
                {dipendenti && dipendenti.length > 0 && dipendenti.map((dip)=>(
                    <tbody key={dip.id}>
                        <tr>
                            <td><Link to={`/dipendenti/${dip.id}`} >{dip.id}</Link></td>
                            <td>{dip.nome}</td>
                            <td>{dip.cognome}</td>
                            <td>{dip.numero}</td>
                            <td>{dip.ruolo}</td>
                            <td>{dip.stipendio}</td>


                        </tr>
                        
                    </tbody>
                ))}

            </table>


            
        </>
    )
}


export default Dipendenti;