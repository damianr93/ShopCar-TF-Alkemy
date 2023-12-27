import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito"
import { actualizarValorContador } from "./cantidad-productos"
import { totalPagar } from "./valor-final"

/**
 * The function `sumarCantidadProducto` adds an event listener to each button with the class "agregar"
 * and updates the quantity of the corresponding product in the shopping cart.
 */
export const sumarCantidadProducto= () => {

    const buttonAgregar = document.querySelectorAll('.agregar')
    
    buttonAgregar.forEach(button => {
        button.addEventListener('click', (event) => {

            const productoId = event.target.closest('.productosSeleccionados').id

            const carrito = obtenerCarrito()

            carrito.forEach(producto => {

                if(producto.id == productoId) {

                    producto.cantidad += 1;

                    event.target.closest('.productosSeleccionados').querySelector('.cantidad').innerText = producto.cantidad
                }

            })

            actualizarValorContador()
  
            totalPagar()

        })
    })
}

/**
 * The function `restarCantidadProducto` is used to decrease the quantity of a product in a shopping
 * cart and update the corresponding elements on the page.
 */
export const restarCantidadProducto= () => {

    const buttonQuitar = document.querySelectorAll('.quitar')
    
    buttonQuitar.forEach(button => {
        button.addEventListener('click', (event) => {

            const productoId = event.target.closest('.productosSeleccionados').id

            const carrito = obtenerCarrito()

            carrito.forEach(producto => {

                if(producto.id == productoId) {

                    if(producto.cantidad === 1) return

                    producto.cantidad -= 1;

                    event.target.closest('.productosSeleccionados').querySelector('.cantidad').innerText = producto.cantidad
                }
            })

            actualizarValorContador()
      
            totalPagar()

        })
    })
}