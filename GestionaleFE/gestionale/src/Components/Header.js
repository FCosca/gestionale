import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import  {DataContext} from '../Context/DataContext'
import '../index.css'

function Header(){
    return(
        <header>
            <div>
                <h1>Gestionale</h1>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/prodotti">prodotti</Link>
                        <Link to="/Dipendenti">Dipendenti</Link>
                        <Link to="/Fornitori">Fornitori</Link>
                        <Link to="/Movimenti">Movimenti</Link>
                        <Link to="/Ordini">Ordini</Link>
                        {/* <a href='#'>Prodotti</a> */}
                        {/* <a href='#'>Dipendenti</a>
                        <a href='#'>Fornitori</a>
                        <a href='#'>Movimenti</a>
                        <a href='#'>Ordini</a> */}
                    </ul>
                </nav>
            </div>
            <hr></hr>      
        </header>
        
    )
}
export default Header