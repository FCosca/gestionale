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
    console.log("data",data)
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

export async function deleteDip(id){
    if(id!=""){
        var res = await fetch (`${config.api}dipendente/delete?id=${id}`, {
            method: 'DELETE'
        })
        var restext = await res.text();
        console.log(restext)
        if(restext == 0){
            console.log('removed');
            // GetDipendentiAll();
          }
          
        
    }};


export async function InsertDip(obj){
    const res = await fetch (`${config.api}dipendente/insert`, {
        method: "POST",
        headers: {  'Accept': 'application/json',
        'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;
  
    };

export async function UpdateDip(obj){
    const res = await fetch(`${config.api}dipendente/update`,{
        method: "PUT",
        headers: {  'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body:JSON.stringify(obj)
    })
    const data = await res.json()
    if (res.status >= 400) {
        console.warn("ERROR api");
        throw new Error(data.message);
      }
      return data;
  
    };