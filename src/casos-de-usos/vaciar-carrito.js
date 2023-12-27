import { eliminarValorContador } from "../presentacion/puppap/cantidad-productos";
import { totalPagar } from "../presentacion/puppap/valor-final";
import { limpiarCarrito } from "./agregarAlCarrito";

/**
 * The function `vaciarCarrito` clears the contents of a shopping cart and performs additional actions
 * such as cleaning the cart, resetting the counter, and updating the total payment amount.
 */
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