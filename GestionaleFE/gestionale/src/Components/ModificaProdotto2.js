import React, { Component, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link, Redirect, useHistory, useParams} from 'react-router-dom'
import Prodotti from './ProdottiComponent'
import config from '../config';

const ModificaProdotti2 = ({ DeleteProdotto, UpdateProdotto, settaProdottiMod}) => {
    const [nameC, setNameC] = useState("")
    const [descrizioneC, setDescrizioneC] = useState("")
    const [giacenzaC, setGiacenzaC] = useState(0)
    const [idC, setIdC] = useState(0)
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);     
    const history = useHistory(); 
    let { idState } = useParams();
    const [prodotti,setProdotti] = useState([])

    

    useEffect(() => {
      const GetProdottiById = async() =>{
        const res = await fetch(`${config.api}prodotti/findByID?id=1`,{
          method: 'GET'
        })
        const data = await res.json()
        .then (data => setProdotti(data), console.log(prodotti))
      }
        GetProdottiById()
    }, [])


    


    function Delete(id){
        console.log(id)
        // DeleteProdotto(id);
        navigateToHome();
    }

    

    

    function navigateToHome() {
      history.push("/prodotti" );
    }

    function setta(){
        setIdC(prodotti.id)
        setNameC(prodotti.nome)
        setDescrizioneC(prodotti.descrizione)
        setGiacenzaC(prodotti.giacenza)
        console.log("sono dentro")
        setLoading(true);
    }

    useEffect(() => {
        if(loading) {
            console.log("useffect")
            setLoading(false)
        }
      },[])

    function chiama(){
        setta()
        handleShow()

    }

    function chiama2(){
        Modifica()
        handleClose() 
    }

    function Modifica(){
        
        console.log(idC,nameC,descrizioneC,giacenzaC)

        settaProdottiMod(idC,nameC,descrizioneC,giacenzaC);
        }

    return (
        <div id='corpo'>
             <h1>Prodotti</h1>
             {/* <button onClick={getProd}>Prodotto </button> */}
             {console.log("ciao ", prodotti)}
             <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col" >Giacenza</th>

                    </tr>
                </thead>
                
                <tbody key={prodotti.id}>
                    <tr>
                        <th scope="row">{prodotti.id}</th>
                        <td>{prodotti.nome}</td>
                        <td>{prodotti.descrizione}</td>
                        <td>{prodotti.giacenza}</td>
                        <td><button onClick={e => Delete(prodotti.id)}>rimuovi</button></td>
                        <td><Button variant="primary" onClick={chiama}>Modifica</Button></td>

                        
                    </tr>
                </tbody>
            </table>
            
            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                        <input type="text" className="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1" value={idC} onChange={e => setIdC(e.target.value)} disabled/>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Descrizione" aria-label="Nome" aria-describedby="basic-addon1" value={descrizioneC} onChange={e => setDescrizioneC(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="Giacenza" aria-label="Nome" aria-describedby="basic-addon1" value={giacenzaC} onChange={e => setGiacenzaC(e.target.value)}/>
                        
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
        </div>
        
    )
}

export default ModificaProdotti2;