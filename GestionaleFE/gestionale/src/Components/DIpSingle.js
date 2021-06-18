import {useParams } from "react-router-dom";
import React, {useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById} from '../services/DipendentiService'

const DipSingle =({}) =>{
    const { id } = useParams()
    const [dipendenti, setDipendenti] = useState([])

    
    useEffect(() => {
        GetDipById(id).then(data => setDipendenti(data));
    }, [])

    

    return (
        <>
            {console.log(dipendenti)}
            {dipendenti.id}
            {dipendenti.nome}
        </>
    )
}

export default DipSingle