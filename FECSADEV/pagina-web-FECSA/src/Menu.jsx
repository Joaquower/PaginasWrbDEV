import { useState } from 'react'
import './Menu.css' 
import buscarEnLista from './utils'

function Menu(){
  const [terminoBusqueda,setTerminoBusqueda]= useState('')
  const [listaFiltrada,setListaFiltrada]= useState([])
  const [mostrarLista,setMostrarLista]= useState(false)
  const listaOriginal = ['vengadores','vendremos','venu','otra']
  const manejarCambio=(evento) =>{
    setTerminoBusqueda(evento.target.value);
    setListaFiltrada(buscarEnLista(listaOriginal,evento.target.value));
    setMostrarLista(evento.target.value !=='')
  };
    return(
      <>
        <nav>
          <div className="logo">
            <img src="" alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="search" placeholder='Buscar' value={terminoBusqueda} onChange={manejarCambio}/>
            {mostrarLista && <ul className='nombresfiltrados'>{listaFiltrada.map((elemento)=>(<li key={(elemento.nombre)}>{elemento}</li>))}</ul>}
          </div>
          <ul className='menu'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <div className="right-image">
            <img src="" alt="FECSA" />
          </div>
        </nav>
      </> 
    )
}

export default Menu;