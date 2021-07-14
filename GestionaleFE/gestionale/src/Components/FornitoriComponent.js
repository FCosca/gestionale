import React, {useState, useEffect } from 'react'
import {GetFornitoriAll, GetFornByNome, GetFornByPiva, GetFornBySede} from '../services/FornitoriService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Fornitori(){
    const [fornitori, setFornitori] = useState([])
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [piva, setPiva] = useState("")
    const [sede, setSede] = useState("")
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
    const history = useHistory(); 


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
            if(nome===""){
                {console.log("dentro1")}
                ricarica()
            }
        handleClose()
    }

    function chiama3(){
        handleShow2()
    }

    function chiama4(){
        GetFornByPiva(piva).then(data=>setFornitori(data));
            if(piva===""){
                {console.log("dentro2")}
                ricarica()
            }
        handleClose2()
    }

    function chiama5(){
        handleShow3()
    }

    function chiama6(){
        GetFornBySede(sede).then(data=>setFornitori(data));
            if(sede===""){
                {console.log("dentro2")}
                ricarica()
            }
        handleClose3()
    }

    function chiama7(){
        handleShow4()

    }

    function chiama8(){
        history.push("/fornitori/"+id );
        handleClose4() 
    }




    return(
        <>
            <h1>Fornitori</h1>
            <div id="buttonTOT">
                <span id="button1">
                    <Button variant="primary" onClick={chiama1}>Cerca Per Nome <i class="fas fa-search"></i></Button>
                </span>
                <span id="button2">
                    <Button variant="primary" onClick={chiama3}>Cerca Per P.IVA <i class="fas fa-search"></i></Button>
                </span>
                <span id="button31">
                    <Button variant="primary" onClick={chiama5}>Cerca Per Sede <i class="fas fa-search"></i></Button>
                </span>
                <span id="button4">
                    <Button variant="primary" onClick={chiama7}>Cerca Per ID <i class="fas fa-search"></i></Button>
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

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerca per P.IVA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input type="text" className="form-control" placeholder="P.IVA" aria-label="Nome" aria-describedby="basic-addon1" value={piva} onChange={e => setPiva(e.target.value)}/>
                            
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
                    <Modal.Title>Cerca per Sede</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input type="text" className="form-control" placeholder="Sede" aria-label="Nome" aria-describedby="basic-addon1" value={sede} onChange={e => setSede(e.target.value)}/>
                            
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
        </>
    )

}

export default Fornitori;
