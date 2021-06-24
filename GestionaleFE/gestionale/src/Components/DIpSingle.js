import {useParams } from "react-router-dom";
import React, {useState, useEffect } from 'react'
import {GetDipendentiAll, GetDipById} from '../services/DipendentiService'
import {useHistory} from 'react-router-dom';


const DipSingle =({}) =>{
    const { id } = useParams()
    const [dipendenti, setDipendenti] = useState([])
    const history = useHistory(); 

    
    useEffect(() => {
        GetDipById(id).then(data => setDipendenti(data));
    }, [])

    function navigateToHome() {
        history.push("/Dipendenti" );
      }

    

    return (
        <>
            {/* {console.log(dipendenti)}
            {dipendenti.id}
            {dipendenti.nome} */}


            <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button>
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