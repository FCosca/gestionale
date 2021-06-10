import React, { useState, useEffect } from "react";
import ProdottiCom from '../../src/Components/ProdottiComponent'
import config from '../config';
import ModificaProdotti from '../../src/Components/ModoficaProdotti'




function ProdottiFetch (){
  const [prodotti,setProdotti] = useState([])
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [giacenza, setGiacenza] = useState(0)
  const [id, setId] = useState(0)
  const [getid, setGetid] = useState(false);
  const [ins, setIns] = useState(false);
  const [mod, setMod] = useState(false);


  const obj = {
    nome: name,
    descrizione: desc,
    giacenza: giacenza
  }

  const obj2 = {
    id: id,
    nome: name,
    descrizione: desc,
    giacenza: giacenza
  }

  useEffect(() => {
    const getDatiAll = async() =>{
      const res = await fetch(`${config.api}prodotti/findAll`)
      const data = await res.json()
      .then (data => setProdotti(data), console.log(prodotti))
      .catch(error => alert(error='error loading the API'))
      
    }
    getDatiAll();    
  },[]) 


  function settaProdotti(nameC,descrizioneC,giacenzaC) {

    setName(nameC)
    setDesc(descrizioneC)
    setGiacenza(giacenzaC)
    setLoading(true)
    setIns(true)
}

    useEffect(() => {
      if(loading) {
        setLoading(false)
        if(ins){InsertProdotto(); setIns(false)}
        
        
      }
    },[name])


    function settaProdottiMod(idC,nameC,descrizioneC,giacenzaC){
      setId(idC)
      setName(nameC)
      setDesc(descrizioneC)
      setGiacenza(giacenzaC)
      setLoading(true)
      setMod(true)
    }

    useEffect(() => {
      if(loading) {
        setLoading(false)
        if(mod){UpdateProdotto(); setMod(false)}
        
        
      }
    },[name])



 


  async function GetProdottiAll(){
    const res = await fetch(`${config.api}prodotti/findAll`,{
      method: 'GET'
    })
    const data = await res.json()
    .then (data => setProdotti(data), console.log(prodotti))
    if (res.status >= 400) {
      console.warn("ERROR api");
      throw new Error(data.message);
    }
    return data;
  }


  async function GetProdottiByNome(nome){
    const res = await fetch(`${config.api}prodotti/findByNome?nome=${nome}`,{
      method: 'GET'
    })
    const data = await res.json()
    .then (data => setProdotti(data) )
    console.log(prodotti)
    if (res.status >= 400) {
      console.warn("ERROR api");
      throw new Error(data.message);
    }
    return data;   
    
  };


  async function GetProdottiOrderByCres(){
    const res = await fetch(`${config.api}prodotti/FindGiacCres`,{
      method: 'GET'
    })
    const data = await res.json()
    .then (data => setProdotti(data), console.log(prodotti))
    if (res.status >= 400) {
      console.warn("ERROR api");
      throw new Error(data.message);
    }
    return data;

  };

  async function GetProdottiOrderByDecre(){
    const res = await fetch(`${config.api}prodotti/FindGiacDecre`,{
      method: 'GET'
    })
    const data = await res.json()
    .then (data => setProdotti(data), console.log(prodotti))
    if (res.status >= 400) {
      console.warn("ERROR api");
      throw new Error(data.message);
    }
    return data;

  };

  async function DeleteProdotto(id){
    var res = await fetch(`${config.api}prodotti/delete?id=${id}`,{method: 'DELETE'})
    var restext = await res.text();
    console.log(restext)
        if(restext == 0){
          console.log('removed');
          GetProdottiAll();
        }
      else{alert("Non puoi eliminare un prodotto se ci sono movimenti")}
    };

    async function InsertProdotto(){
      const res = await fetch(`${config.api}prodotti/insert`, {
        method: "POST",
        headers: {  'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body:JSON.stringify(obj)
    })
      const data = await res.json()
      .then (data => setProdotti(data), console.log(prodotti))
      GetProdottiAll();
      if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;
  
    };

    


    async function GetProdottiById(id){
      const res = await fetch(`${config.api}prodotti/findByID?id=${id}`,{
        method: 'GET'
      })
      const data = await res.json()
      .then (data => setProdotti(data), console.log(prodotti), setGetid(true))
      console.log(data)
      if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return (data)
   
    };

    async function UpdateProdotto(){
      const res = await fetch(`${config.api}prodotti/update`, {
        method: "PUT",
        headers: {  'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body:JSON.stringify(obj2)
    })
      const data = await res.json()
      .then (data => setProdotti(data), console.log(prodotti))
      // GetProdottiAll();
      if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;
  
    };




  return (
    <>
      {prodotti ? getid ? <ModificaProdotti prodotti={prodotti} DeleteProdotto={DeleteProdotto} UpdateProdotto={UpdateProdotto} settaProdottiMod={settaProdottiMod}/> : <ProdottiCom prodotti={prodotti} setProdotti={setProdotti} GetProdottiByNome={GetProdottiByNome} GetProdottiOrderByCres={GetProdottiOrderByCres} GetProdottiOrderByDecre={GetProdottiOrderByDecre} DeleteProdotto={DeleteProdotto}  GetProdottiById={GetProdottiById}/> : <></>}
    </>
  )


}



export default ProdottiFetch