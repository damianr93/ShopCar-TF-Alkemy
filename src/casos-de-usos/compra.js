import { eliminarValorContador } from "../presentacion/puppap/cantidad-productos";
import { totalPagar } from "../presentacion/puppap/valor-final";
import { limpiarCarrito, obtenerCarrito } from "./agregarAlCarrito"

/**
 * The `comprar` function is an event listener that triggers when the "comprar" button is clicked, and
 * it displays an alert message with the products purchased and the total amount paid.
 */
export const comprar = () => {

    const HTMLelement = document.querySelector('.productosContenedor')

    const buttonCompra = document.querySelector('.comprar')

    const encabezadoMensaje = 'Gracias por su compra, \n ha adquirido:\n'

    let productosMensaje = '';

    const finMensaje = `Por un valor de: $${totalPagar()}`

    const carrito = obtenerCarrito()

    carrito.forEach(producto => {

        productosMensaje += `${producto.cantidad} ${producto.title}\n`

    })

    const mensajeFinal = encabezadoMensaje + productosMensaje + finMensaje

    buttonCompra.addEventListener('click', () => {
        
        HTMLelement.innerHTML = '';
      
        limpiarCarrito()
      
        eliminarValorContador()
      
        totalPagar()

        alert(mensajeFinal)
    })
}