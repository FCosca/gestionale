import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById, GetDipendentiByNome} from '../services/DipendentiService'
import { Link } from 'react-router-dom';


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])
    const [nome, setNome] = useState("")
    const [loading, setLoading] = useState(false)
    // const [loadingTutto, setLoadingTutto] = useState(false)




    // useEffect(() => {


    //     //  const res1 = GetDipendentiAll().then(data => setDipendenti(data)).then(console.log("res1",dipendenti));
    //     //  console.log("con",GetDipendentiAll().then(data => setDipendenti(data)))
    //      const GetDatiDip= async()=>{
    //         const res1 = await GetDipendentiAll()
    //         .then(data => setDipendenti(data), console.log("con",dipendenti))
    //         .catch(console.error("errore"))

    //      }
    //      GetDatiDip();
    // },[])

    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data))
        
    }, [])

//     useEffect(() => {

//         const GetDatiDip = async()=>{
//            const res = await fetch(`${config.api}dipendente/findAll`)
//            const data = await res.json()
//            .then(data => setDipendenti(data), console.log("dentro use", dipendenti))
//            .catch(error => alert(error='errore loading'))
//         }
//         GetDatiDip();
//    },[])

    // useEffect(() => {
    //     const GetDatiDip = async()=>{
    //         const res = await GetDipendentiAll().then(data => setDipendenti(data));
    //     }
    //     GetDatiDip();
    // }, [])

    // useEffect(() => {
    //     async function GetDatiDip(){
    //         const res = await GetDipendentiAll().then(data => setDipendenti(data));
    //     }
    // }, [input])


    const handleSubmit =(e)=>{
        e.preventDefault()
        // setLoading(true)
        // console.log(loading)
        console.log("handlesubmit",nome)
        // if(nome === ""){
        //     console.log("uguale")
        // }
        // else{
        //     GetDipendentiByNome(nome).then(data => setDipendenti(data))
        // ricarica()
        // }
        // if(dipendenti){
        //     GetDipendentiByNome(nome).then(data => setDipendenti(data));
        //     // ricarica()
        // }
            // if(dipendenti){
            // {console.log("dentro2")}
            //  GetDipendentiByNome(nome).then(data => setDipendenti(data));
            //  if(nome===""){
            //      {console.log("dentro")}
            //                 //   GetDipendentiAll().then(data => setDipendenti(data));
            //                 ricarica()

            //  }
            // }
            //  GetDipendentiAll().then(data => setDipendenti(data));
            GetDipendentiByNome(nome).then(data => setDipendenti(data));
            if(nome===""){
                     {console.log("dentro")}
                                //   GetDipendentiAll().then(data => setDipendenti(data));
                                ricarica()
    
                 }
             
    }

    async function ricarica(){
        
            const res = await GetDipendentiAll().then(data => setDipendenti(data));
            // console.log("res",res)
            // if(res){
            //     console.log("dentro ricarica")
            // }
        

    }


    // useEffect(() => {
    //     console.log("dentro 2")
    //     if(loading){
    //         setLoading(false)
    //         console.log("dentro")
    //         GetDipendentiByNome(nome).then(data => setDipendenti(data))
    //     }
    // }, [nome])



    return(
        <>

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"  >nome</span>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </div>
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


                        </tr>
                        
                    </tbody>
                ))}

            </table>
            
        </>
    )
}


export default Dipendenti;