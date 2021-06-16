import React, { Component, useState, useEffect } from 'react'
import {GetDipendentiAll} from '../services/DipendentiService'


function Dipendenti (){
    const [dipendenti, setDipendenti] = useState([])

    
    useEffect(() => {
        GetDipendentiAll().then(data => setDipendenti(data));
    }, [])

    return(
        <>
            {console.log(dipendenti)}
            {dipendenti.map((dip)=>(
                <p>{dip.id}{dip.nome}{dip.cognome}</p>
            ))}
        </>
    )
}


export default Dipendenti;