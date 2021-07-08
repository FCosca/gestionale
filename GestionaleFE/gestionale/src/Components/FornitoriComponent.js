import React, {useState, useEffect } from 'react'
import {GetFornitoriAll} from '../services/FornitoriService'
import { Link , Redirect, useHistory} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Fornitori(){
    const[fornitori, setFornitori] = useState([])


    return(
        <>
            <h1>Test Component</h1>
        </>
    )

}

export default Fornitori;
