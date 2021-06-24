import config from '../config';


export async function GetDipendentiAll(){
    const res = await fetch(`${config.api}dipendente/findAll`,{
        method: 'GET'
    })
    const data = await res.json()
    if (res.status >= 400){
        console.warn("ERROR API");
        throw new Error(data.message);
    }
    return data;
}

export async function GetDipById(id){
    if(id!=""){
    const res = await fetch(`${config.api}dipendente/findByID?id=${id}`,{
        method: 'GET'
      })
    const data = await res.json()
    if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return (data);
   
}};

export async function GetDipendentiByNome(nome){
    if(nome!=""){
    const res = await fetch (`${config.api}dipendente/findByNome?nome=${nome}`,{
        method: 'GET'
    })
    const data = await res.json()
    if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;   
      
    }};

export async function GetDipendentiByCognome(cognome){
    if(cognome!=""){
        const res = await fetch (`${config.api}dipendente/findByCognome?cognome=${cognome}`, {
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;   
      
    }};

export async function GetDipendentiByRuolo(ruolo){
    if(ruolo!=""){
        const res = await fetch (`${config.api}dipendente/findByRuolo?ruolo=${ruolo}`, {
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
        throw new Error(data.message);
        }
        return data;   
        
    }};
