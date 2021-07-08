import React, {useState, useEffect } from 'react'
import {GetFornitoriAll} from '../services/FornitoriService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Fornitori(){
    const[fornitori, setFornitori] = useState([])


    useEffect(() =>{
        GetFornitoriAll().then(data => setFornitori(data))
    },[])


    return(
        <>
            {console.log("fornitori", fornitori )}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Partita IVA</th>
                        <th scope="col">Sede</th>
                    </tr>
                </thead>
            {fornitori && fornitori.length > 0 && fornitori.map((forn) =>(
                <tbody key={forn.id}>
                    <tr>
                        <td><Link to={`/fornitori/${forn.id}`}>{forn.id}</Link></td>
                        <td>{forn.nome}</td>
                        <td>{forn.piva}</td>
                        <td>{forn.sede}</td>
                    </tr>

                </tbody>
            ))}
            </table>
        </>
    )

}

export default Fornitori;
