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
