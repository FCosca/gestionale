import {useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, {useState, useEffect } from 'react'
import {GetFornById, deleteFor, updateFor} from '../services/FornitoriService'
import {useHistory} from 'react-router-dom';


const ForSingle = ({})=>{
    const history = useHistory(); 
    const {id} = useParams()
    const [nome, setNome] = useState("")
    const [piva, setPiva] = useState("")
    const [sede, setSede] = useState("")
    const [fornitori, setFornitori] = useState ([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const GetForn = async() =>{
            const res1 = await GetFornById(id).then(data1 => setFornitori(data1))
        }
        GetForn()
    },[])

    const obj ={
        id: id,
        nome: nome,
        piva: piva,
        sede: sede
    }

    function navigateToHome(){
        history.push("/Fornitori");
    }
    
    async function deleteForn(id){
        await deleteFor(id)
        navigateToHome()
    }

    function chiama(){
        setta()
        handleShow()
    
    }

    async function chiama2(){
        await updateFor(obj)
        handleClose()
        setLoading(true)
        if(loading){
            setLoading(false)
            await GetFornById(id).then(data1 => setFornitori(data1))
        }
        
    }

    function setta(){
        setNome(fornitori.nome)
        setPiva(fornitori.piva)
        setSede(fornitori.sede)
        console.log(obj)
        setLoading(true);
    }


    return(
        <>
            <h1>Fornitori</h1>
            <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Partita IVA</th>
                        <th scope="col">Sede</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fornitori.id}</td>
                        <td>{fornitori.nome}</td>
                        <td>{fornitori.piva}</td>
                        <td>{fornitori.sede}</td>
                        <td><Button variant="primary" onClick={chiama}>Modifica</Button></td>
                        <td><Button variant="primary" onClick={e => deleteForn(fornitori.id)}>Rimuovi</Button></td>

                    </tr>
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Fornitore</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Piva" aria-label="Nome" aria-describedby="basic-addon1" value={piva} onChange={e => setPiva(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Sede" aria-label="Nome" aria-describedby="basic-addon1" value={sede} onChange={e => setSede(e.target.value)}/>

                        
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

export default ForSingle