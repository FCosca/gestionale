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
    const [del, setDel] = useState(false)
    const [ins, setIns] = useState(false)
    // const [loadingTutto, setLoadingTutto] = useState(false)




    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data))
        if(del){
            setDel(false)
            GetDipendentiAll().then(data => setDipendenti(data))
        }
    }, [del])

    // useEffect(() => {
    //     GetDipendentiAll().then(data => setDipendenti(data))
        
    // }, [])

    const obj={
        nome: nome,
        cognome: cognome,
        numero: numero,
        ruolo: ruolo,
        stipendio: stipendio

    }




    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    
    //     console.log("handlesubmit",nome)
        
    //         GetDipendentiByNome(nome).then(data => setDipendenti(data));
    //         if(nome===""){
    //                  {console.log("dentro")}
    //                             ricarica()
    
    //              }
             
    // }


    const inser=(e)=>{
        e.preventDefault()
        console.log(nome, cognome, numero , ruolo, stipendio)
        console.log(obj)
        // setIns(true)
        InsertDip(obj)
        // console.log(InsertDip(obj))
        clear()


    }

    function clear(){
        setNome("")
        setCognome("")
        setNumero(0)
        setRuolo("")
        setStipendio(0)
        ricarica()
    }

    // useEffect(()=>{
    //     if(ins){

    //         setIns(false)
    //         GetDipendentiAll().then(data => setDipendenti(data))
    //     }
    // },[ins])


    // const handleSubmitRuolo=(e)=>{
    //     e.preventDefault()
    //     console.log("ruolo", ruolo)
    //     GetDipendentiByRuolo(ruolo).then(data=>setDipendenti(data));
    //     if(ruolo===""){
    //         {console.log("dentro3")}
    //         ricarica()
    //     }
    // }

    // const handleSubmitId=(e)=>{
    //     e.preventDefault()
    //     console.log("id", id)
    //     GetDipById(id).then(data=>setDipendenti(data));
    //     if(id===""){
    //         {console.log("dentro4")}
    //         ricarica()
    //     }
    // }
    
    // 

    

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
        {console.log("sto aprendo ruolo")}
        handleShow4()

    }

    function chiama8(){
        history.push("/dipendenti/"+id );
        handleClose4() 
    }

    function deleteDipe(id){
        console.log(id)
        deleteDip(id)
        setDel(true)
        // if(del){
        //     setDel(false)
        //     ricarica()
        // }
        
        // ricarica()

    }

    // const inser=(e)=>{
    //     e.prevetDefault()
    //     console.log(nome, cognome, numero, ruolo, stipendio)
    // }
    
    // useEffect(()=>{
    //     if(del){
    //         setDel(false)
    //         GetDipendentiAll().then(data => setDipendenti(data))
            
    //     }
    // },[del])



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

                <span id="button31">
                    <Button variant="primary" onClick={chiama5}>Cerca Per Ruolo <i class="fas fa-search"></i></Button>
                </span>
                <span id="button4">
                    <Button variant="primary" onClick={chiama7}>Cerca Per ID <i class="fas fa-search"></i></Button>
                </span>
            </div>
            {/* <form onSubmit={inser}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            {/* <form onSubmit={inser}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >cognome</span>
                    <input type="text" className="form-control" placeholder="Cognome" aria-label="Cognome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            {/* <form onSubmit={handleSubmitRuolo}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >Ruolo</span>
                    <input type="text" className="form-control" placeholder="Ruolo" aria-label="Ruolo" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            {/* <form onSubmit={navigateToHome}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >ID</span>
                    <input type="text" className="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1" value={id} onChange={e => setId(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}

            <form onSubmit={inser}>
                <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Cognome" aria-label="Nome" aria-describedby="basic-addon1" value={cognome} onChange={e => setCognome(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Numero" aria-label="Numero" aria-describedby="basic-addon1" value={numero} onChange={e => setNumero(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Ruolo" aria-label="Nome" aria-describedby="basic-addon1" value={ruolo} onChange={e => setRuolo(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Stipendio" aria-label="Numero" aria-describedby="basic-addon1" value={stipendio} onChange={e => setStipendio(e.target.value)}/>
                <input type="submit" value="Submit" />
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
                            <td><button onClick={e => deleteDipe(dip.id)}>rimuovi</button></td>


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


            
        </>
    )
}


export default Dipendenti;