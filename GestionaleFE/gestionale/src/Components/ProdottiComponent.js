import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'




  

const Prodotti = ({ prodotti, GetProdottiByNome, GetProdottiOrderByDecre, GetProdottiOrderByCres, DeleteProdotto, settaProdotti, GetProdottiById , GetProdottiAll }) => {
    const [ord , setOrd] = useState("")
    const [nameC, setNameC] = useState("")
    const [descrizioneC, setDescrizioneC] = useState("")
    const [giacenzaC, setGiacenzaC] = useState(0)
    const [idC, setIdC] = useState(0)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);     
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);    


    const handleSubmit = (e) =>{
        console.log(nameC)
        GetProdottiByNome(nameC)
    }

    const finById =(e) =>{
        
        console.log(idC)
        GetProdottiById(idC)

    }

    function Insert(e){
        // e.preventDefault();
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

    function OrdineId(e){
        e.preventDefault()
        GetProdottiAll()
    }

    function Delete(id){
        console.log(id)
        DeleteProdotto(id)
    }

    function chiama(){
        handleShow()

    }

    function chiama2(){
        Insert()
        handleClose() 
    }

    function chiama3(){
        handleShow2()

    }

    function chiama4(){
        finById()
        handleClose2() 
    }

    function chiama5(){
        handleShow3()

    }

    function chiama6(){
        handleSubmit()
        handleClose3() 
    }


    
    
    return (
        <div id='corpo'>
            <h1>Prodotti</h1>
            {/* {prodotti.id} */}
            {/* <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
            <div id="buttonTOT">

                <span id="button1">
                    <Button variant="primary" onClick={chiama5}>Cerca Per Nome <i class="fas fa-search"></i></Button>

                </span>

                {/* <form onSubmit={finById}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"  >ID</span>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={idC} onChange={e => setIdC(e.target.value)}/>
                        <input type="submit" value="Submit" />
                    </div>
                </form> */}
                <span id="button2">
                    <Button variant="primary" onClick={chiama3}>Cerca Per ID <i class="fas fa-search"></i></Button>

                </span>

                {/* <form onSubmit={Insert}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Descrizione" aria-label="Nome" aria-describedby="basic-addon1" value={descrizioneC} onChange={e => setDescrizioneC(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Giacenza" aria-label="Nome" aria-describedby="basic-addon1" value={giacenzaC} onChange={e => setGiacenzaC(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </form> */}
                <span id="button3">
                    <Button variant="primary" onClick={chiama}>Aggiungi Prodotto <i class="fas fa-plus"></i></Button>
                    
                </span>
            </div>
        
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" onClick={OrdineId}>ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col" onClick={Ordine}>Giacenza</th>
                    </tr>
                </thead>
                {prodotti && prodotti.length > 0 && prodotti.map((prodotto) => (
                    
                <tbody key={prodotto.id}>
                    
                    <tr>
                    
                    <Link to={`/prodotti/${prodotto.id}`}><th scope="row" onClick={e => GetProdottiById(prodotto.id)}>{prodotto.id}</th></Link> 
                        <td onClick={e => GetProdottiById(prodotto.id)}>{prodotto.nome}</td>
                        <td onClick={e => GetProdottiById(prodotto.id)}>{prodotto.descrizione}</td>
                        <td onClick={e => GetProdottiById(prodotto.id)}>{prodotto.giacenza}</td>
                        <td><button onClick={e => Delete(prodotto.id)}>rimuovi</button></td>
                        
                    </tr>
                    
                </tbody>
                
                
                ))}
            </table>

            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Aggiungi Prodotto</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
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

                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cerca per ID</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={idC} onChange={e => setIdC(e.target.value)}/> 
                            
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
                    <Modal.Title>Cerca per Nome</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                  <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nameC} onChange={e => setNameC(e.target.value)}/>
                            
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
        </div>

        
    )
    };
export default Prodotti;