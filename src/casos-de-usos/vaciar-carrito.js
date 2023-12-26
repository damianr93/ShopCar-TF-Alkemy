import { eliminarValorContador } from "../presentacion/puppap/cantidad-productos";
import { totalPagar } from "../presentacion/puppap/valor-final";
import { limpiarCarrito } from "./agregarAlCarrito";

export const vaciarCarrito = () => {

    const HTMLelement = document.querySelector('.productosContenedor')

    const vaciarCarro = document.querySelector('.vaciar')

    vaciarCarro.addEventListener('click', () => {

        HTMLelement.innerHTML = '';
      
        limpiarCarrito()
      
        eliminarValorContador()
      
        totalPagar()         
    })
}