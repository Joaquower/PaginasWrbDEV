function buscarEnLista(lista, terminoBusqueda){
    return lista.filter((elemento)=>
    elemento.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
}
export default buscarEnLista;