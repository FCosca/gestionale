import React, { useState, useEffect } from "react";
import ProdottiCom from '../../src/Components/ProdottiComponent'
import config from '../config';




function ProdottiFetch (){
  const [prodotti,setProdotti] = useState([])
  
  

  useEffect(() => {
    const getDatiAll = async() =>{
      const res = await fetch(`${config.api}prodotti/findAll`)
      const data = await res.json()
      .then (data => setProdotti(data), console.log(prodotti))
      .catch(error => alert(error='error loading the API'))
      
    }
    getDatiAll();    
  },[]) 


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


  return(
    prodotti ? <ProdottiCom prodotti={prodotti} setProdotti={setProdotti} GetProdottiByNome={GetProdottiByNome} GetProdottiOrderByCres={GetProdottiOrderByCres} GetProdottiOrderByDecre={GetProdottiOrderByDecre} DeleteProdotto={DeleteProdotto}/>  : <></>
    ) 
  }



export default ProdottiFetch