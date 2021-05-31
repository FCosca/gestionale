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


  return(
    prodotti ? <ProdottiCom prodotti={prodotti} setProdotti={setProdotti} />  : <></>
    ) 
  }



export default ProdottiFetch