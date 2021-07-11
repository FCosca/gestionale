import React, {useState, useEffect } from 'react'
import {GetFornitoriAll, GetFornByNome} from '../services/FornitoriService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Fornitori(){
    const[fornitori, setFornitori] = useState([])
    const [nome, setNome] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() =>{
        GetFornitoriAll().then(data => setFornitori(data))
    },[])

    async function ricarica(){
        const res = await GetFornitoriAll().then(data=>setFornitori(data))
    }

    function chiama1(){
        handleShow()
    }

    function chiama2(){
        GetFornByNome(nome).then(data=>setFornitori(data));
        if(nome==="")
            {console.log("dentro")}
            ricarica()
        handleClose()
    }


    return(
        <>
            <h1>Fornitori</h1>
            <div id="buttonTOT">
                <span id="button1">
                    <Button variant="primary" onClick={chiama1}>Cerca Per Nome <i class="fas fa-search"></i></Button>
                </span>
            </div>
            {console.log("fornitori", fornitori )}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Partita IVA</th>
                        <th scope="col">Sede</th>
                    </tr>
                </thead>
            {fornitori && fornitori.length > 0 && fornitori.map((forn) =>(
                <tbody key={forn.id}>
                    <tr>
                        <td><Link to={`/fornitori/${forn.id}`}>{forn.id}</Link></td>
                        <td>{forn.nome}</td>
                        <td>{forn.piva}</td>
                        <td>{forn.sede}</td>
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
        </>
    )

}

export default Fornitori;
