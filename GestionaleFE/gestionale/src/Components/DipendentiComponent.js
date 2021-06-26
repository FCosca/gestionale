import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById, GetDipendentiByNome, GetDipendentiByCognome, GetDipendentiByRuolo} from '../services/DipendentiService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [ruolo, setRuolo] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory(); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    // const [loadingTutto, setLoadingTutto] = useState(false)




    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data))
        
    }, [])




    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    
    //     console.log("handlesubmit",nome)
        
    //         GetDipendentiByNome(nome).then(data => setDipendenti(data));
    //         if(nome===""){
    //                  {console.log("dentro")}
    //                             ricarica()
    
    //              }
             
    // }


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

    // const handleSubmitId=(e)=>{
    //     e.preventDefault()
    //     console.log("id", id)
    //     GetDipById(id).then(data=>setDipendenti(data));
    //     if(id===""){
    //         {console.log("dentro4")}
    //         ricarica()
    //     }
    // }
    
    function navigateToHome() {
        history.push("/dipendenti/"+id );
      }

    async function ricarica(){
        
            const res = await GetDipendentiAll().then(data => setDipendenti(data));       

    }

    function chiama1(){
        handleShow()

    }

    function chiama2(){
        GetDipendentiByNome(nome).then(data => setDipendenti(data));
            if(nome===""){
                     {console.log("dentro")}
                                ricarica()
    
                 }
        handleClose() 
    }

    function chiama3(){
        {console.log("sto aprendo cognome")}
        handleShow2()

    }

    function chiama4(){
        console.log("cognome", cognome)
        GetDipendentiByCognome(cognome).then(data=> setDipendenti(data));
            if(cognome===""){
                {console.log("dentro2")}
                ricarica()
            }
        handleClose2() 
    }



    return(
        <>
            {/* <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button> */}
            <div id="buttonTOT">
                <span id="button1">
                    <Button variant="primary" onClick={chiama1}>Cerca Per Nome <i class="fas fa-search"></i></Button>
                </span>


                <span id="button2">
                    <Button variant="primary" onClick={chiama3}>Cerca Per Cognome <i class="fas fa-search"></i></Button>
                </span>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            {/* <form onSubmit={handleSubmitCognome}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >cognome</span>
                    <input type="text" className="form-control" placeholder="Cognome" aria-label="Cognome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            <form onSubmit={handleSubmitRuolo}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >Ruolo</span>
                    <input type="text" className="form-control" placeholder="Ruolo" aria-label="Ruolo" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={navigateToHome}>
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

            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cerca per Nome</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                  <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                            
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={chiama2}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>

            
                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cerca per Cognome</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                  <input type="text" className="form-control" placeholder="Cognome" aria-label="Nome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                            
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={chiama4}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>


            
        </>
    )
}


export default Dipendenti;