import React, { Component, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModificaProdotti = ({ prodotti, DeleteProdotto }) => {

    function Delete(id){
        console.log(id)
        DeleteProdotto(id)
    }

    return (
        <div id='corpo'>
             <h1>Prodotti</h1>
             <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col" >Giacenza</th>

                    </tr>
                </thead>
                <tbody key={prodotti.id}>
                    <tr>
                        <th scope="row">{prodotti.id}</th>
                        <td>{prodotti.nome}</td>
                        <td>{prodotti.descrizione}</td>
                        <td>{prodotti.giacenza}</td>
                        <td><button onClick={e => Delete(prodotti.id)}>rimuovi</button></td>

                        
                    </tr>
                </tbody>
            </table>
            
            
        </div>
        
    )
}

export default ModificaProdotti;