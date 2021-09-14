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
            {/* {console.log(dipendenti)}
            {dipendenti.id}
            {dipendenti.nome} */}

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
                
                    <tbody>
                        <tr>
                            <td>{dipendenti.id}</td>
                            <td>{dipendenti.nome}</td>
                            <td>{dipendenti.cognome}</td>
                            <td>{dipendenti.numero}</td>
                            <td>{dipendenti.ruolo}</td>
                            <td>{dipendenti.stipendio}</td>


                        </tr>
                        
                    </tbody>

            </table>
        </>
    )
}

export default DipSingle