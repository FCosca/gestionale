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


  return(
    prodotti ? <ProdottiCom prodotti={prodotti} setProdotti={setProdotti} GetProdottiByNome={GetProdottiByNome}/>  : <></>
    ) 
  }



export default ProdottiFetch