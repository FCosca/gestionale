import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById, GetDipendentiByNome, GetDipendentiByCognome, GetDipendentiByRuolo, deleteDip, InsertDip} from '../services/DipendentiService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [ruolo, setRuolo] = useState("")
    const [numero, setNumero] = useState(0)
    const [stipendio, setStipendio] = useState(0)
    const [loading, setLoading] = useState(false)
    const history = useHistory(); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);




    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data))
    }, [])

    const obj={
        nome: nome,
        cognome: cognome,
        numero: numero,
        ruolo: ruolo,
        stipendio: stipendio

    }

    async function ricarica(){
        
            const res = await GetDipendentiAll().then(data => setDipendenti(data));  
                 

    }

    async function inser(){
        console.log(nome, cognome, numero , ruolo, stipendio)
        console.log(obj)
        await InsertDip(obj)
        clear()
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


    function chiama5(){
        {console.log("sto aprendo ruolo")}
        handleShow3()

    }

    function chiama6(){
        console.log("ruolo", ruolo)
        GetDipendentiByRuolo(ruolo).then(data=>setDipendenti(data));
            if(ruolo===""){
                {console.log("dentro3")}
                ricarica()
            }
        handleClose3() 
    }

    function chiama7(){
        handleShow4()

    }

    function chiama8(){
        history.push("/dipendenti/"+id );
        handleClose4() 
    }

    function chiama9(){
        handleShow5()
    }

    function chiama10(){
        inser()
        handleClose5() 
    }

    async function deleteDipe(id){
        console.log(id)
        await deleteDip(id)
        ricarica()
    }

    function clear(){
        setNome("")
        setCognome("")
        setNumero(0)
        setRuolo("")
        setStipendio(0)
        ricarica()
    }



    return(
        <>
            <div id="buttonTOT">
                <span id="button1">
                    <Button variant="primary" onClick={chiama1}>Cerca Per Nome <i class="fas fa-search"></i></Button>
                </span>

                <span id="button2">
                    <Button variant="primary" onClick={chiama3}>Cerca Per Cognome <i class="fas fa-search"></i></Button>
                </span>

                <span id="button31">
                    <Button variant="primary" onClick={chiama5}>Cerca Per Ruolo <i class="fas fa-search"></i></Button>
                </span>

                <span id="button4">
                    <Button variant="primary" onClick={chiama7}>Cerca Per ID <i class="fas fa-search"></i></Button>
                </span>

                <span id="buttonReset">
                    <Button variant="primary" onClick={clear}><i class="far fa-times-circle"></i></Button>
                </span>

                <span id="buttonReset">
                    <Button variant="primary" onClick={ricarica}><i class="fas fa-sync-alt"></i></Button>
                </span>

                <span id="buttonReset">
                    <Button variant="primary" onClick={chiama9}>Aggiungi Dipendente <i class="fas fa-plus"></i></Button>
                </span>
                
            </div>
                        
            {console.log("return", dipendenti)}
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
                            <td><Button  ariant="primary" onClick={e => deleteDipe(dip.id)}>rimuovi</Button></td>


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

            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerca per Ruolo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input type="text" className="form-control" placeholder="Ruolo" aria-label="Ruolo" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={chiama6}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerca per ID</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1" value={id} onChange={e => setId(e.target.value)}/>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={chiama8}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title>Aggiungi Dipendente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Cognome" aria-label="Nome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Numero" aria-label="Numero" aria-describedby="basic-addon1" value={numero} onChange={e => setNumero(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Ruolo" aria-label="Nome" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Stipendio" aria-label="Numero" aria-describedby="basic-addon1" value={stipendio} onChange={e => setStipendio(e.target.value)}/>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose5}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={chiama10}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            


            
        </>
    )
}


export default Dipendenti;