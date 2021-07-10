import {useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, {useState, useEffect } from 'react'
import {GetFornById} from '../services/FornitoriService'
import {useHistory} from 'react-router-dom';


const ForSingle = ({})=>{
    const history = useHistory(); 
    const {id} = useParams()
    const [fornitori, setFornitori] = useState ([])

    useEffect(()=>{
        const GetForn = async() =>{
            const res1 = await GetFornById(id).then(data1 => setFornitori(data1))
        }
        GetForn()
    },[])

    function navigateToHome(){
        history.push("/Fornitori");
    }
    


    return(
        <>
            <h1>Fornitori</h1>
            <button onClick={navigateToHome}><i class="fas fa-arrow-left"></i></button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Partita IVA</th>
                        <th scope="col">Sede</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fornitori.id}</td>
                        <td>{fornitori.nome}</td>
                        <td>{fornitori.piva}</td>
                        <td>{fornitori.sede}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ForSingle