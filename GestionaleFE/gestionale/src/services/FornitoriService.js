import config from '../config';

export async function GetFornitoriAll(){
    const res = await fetch(`${config.api}fornitore/findAll`, {
        method : 'GET'
    })
    const data = await res.json()
    if(res.status >= 400){
        console.warn("ERROR API");
        throw new Error(data.message);
    }
    return data;
}

export async function GetFornById(id){
    if(id!==""){
        const res = await fetch(`${config.api}fornitore/findByID?id=${id}`,{
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
            throw new Error(data.message)
        }
        return (data);
    }
}

export async function GetFornByNome(nome){
    if(nome!==""){
        const res = await fetch (`${config.api}fornitore/findByNome?nome=${nome}`,{
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
            throw new Error(data.message);
        }
        return data;
    }
}

export async function GetFornByPiva(piva){
    if(piva!==""){
        const res = await fetch(`${config.api}fornitore/findByPiva?pIva=${piva}`,{
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
            throw new Error(data.message);
        }
        return data;
    }
}

export async function GetFornBySede(sede){
    if(sede!==""){
        const res = await fetch(`${config.api}fornitore/findBySede?sede=${sede}`,{
            method: 'GET'
        })
        const data = await res.json()
        if(res.status >= 400){
            console.warn("ERROR api");
            throw new Error(data.message);
        }
        return data;
    }
}


export async function deleteFor(id){
    if(id!==""){
        var res = await fetch (`${config.api}fornitore/delete?id=${id}`,{
            method: 'DELETE'
        })
        var restext = await res.text();
        console.log(restext)
        if(restext === 0){
            console.log('removed');
        }
    }
}

export async function InsertFor(obj){
    const res = await fetch (`${config.api}fornitore/insert`,{
        method: "POST",
        headers: {  'Accept': 'application/json',
        'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    if(res.status >= 400){
        console.warn("ERROR api");
        throw new Error(data.message);
    }
    return data;
}

export async function updateFor(obj){
    const res = await fetch (`${config.api}fornitore/update`, {
        method: "PUT",
        headers: {  'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body:JSON.stringify(obj)
    })
    const data = await res.json()
    if(res.status >= 400){
        console.warn("ERROR api");
        throw new Error(data.message);
    }
    return data;
}