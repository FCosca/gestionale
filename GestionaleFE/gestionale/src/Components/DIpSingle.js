import {useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, {useState, useEffect } from 'react'
import {GetDipById, UpdateDip} from '../services/DipendentiService'
import {useHistory} from 'react-router-dom';


const DipSingle =({}) =>{
    const { id } = useParams()
    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [ruolo, setRuolo] = useState("")
    const [numero, setNumero] = useState(0)
    const [stipendio, setStipendio] = useState(0)
    const [dipendenti, setDipendenti] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   
    const history = useHistory(); 
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const GetDip = async() =>{
            const res1 = await GetDipById(id)
            .then(data1 => setDipendenti(data1))
            
        }
        GetDip()
    }, [])

    const obj={
        id:id,
        nome: nome,
        cognome: cognome,
        numero: numero,
        ruolo: ruolo,
        stipendio: stipendio

    }

    
    

    function navigateToHome() {
        history.push("/Dipendenti" );
      }

    function chiama(){
        setta()
        handleShow()
    }
    
    async function chiama2(){
        await UpdateDip(obj)
        console.log("dip", dipendenti)
        handleClose()
        setLoading(true)
        if(loading){
            setLoading(false)
            await GetDipById(id).then(data1 => setDipendenti(data1))
        }
        
        
    }
    
   function setta(){
        setNome(dipendenti.nome)
        setCognome(dipendenti.cognome)
        setNumero(dipendenti.numero)
        setRuolo(dipendenti.ruolo)
        setStipendio(dipendenti.stipendio)
        console.log(obj)
        setLoading(true);
    }


    

    return (
        <>


            <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button>
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
                
                    <tbody>
                        <tr>
                            <td>{dipendenti.id}</td>
                            <td>{dipendenti.nome}</td>
                            <td>{dipendenti.cognome}</td>
                            <td>{dipendenti.numero}</td>
                            <td>{dipendenti.ruolo}</td>
                            <td>{dipendenti.stipendio}</td>
                            <td><Button variant="primary" onClick={chiama}>Modifica</Button></td>



                        </tr>
                        
                    </tbody>

            </table>

            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Cognome" aria-label="Nome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Ruolo" aria-label="Nome" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>

                        
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

export default DipSingle