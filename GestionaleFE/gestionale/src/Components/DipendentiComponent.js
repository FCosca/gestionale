import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById} from '../services/DipendentiService'
import { Link } from 'react-router-dom';


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])

    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data));
    }, [])

    return(
        <>
            {console.log(dipendenti)}
            {dipendenti.map((dip)=>(
                <>
               <Link to={`/dipendenti/${dip.id}`}><p>{dip.id}</p></Link> 

                {/* <p onClick={GetDipById(dip.id)}>{dip.id}{dip.nome}{dip.cognome}</p> */}
                </>
            ))}
        </>
    )
}


export default Dipendenti;