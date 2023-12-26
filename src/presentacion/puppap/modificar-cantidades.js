import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito"
import { disminuirValorContador, incrementarValorContador } from "./cantidad-productos"
import { totalPagar } from "./valor-final"

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

            incrementarValorContador()
  
            totalPagar()

        })
    })
}

export const restarCantidadProducto= () => {

    const buttonQuitar = document.querySelectorAll('.quitar')
    
    buttonQuitar.forEach(button => {
        button.addEventListener('click', (event) => {

            const productoId = event.target.closest('.productosSeleccionados').id

            const carrito = obtenerCarrito()

            carrito.forEach(producto => {

                if(producto.id == productoId) {
                 
                    producto.cantidad -= 1;

                    event.target.closest('.productosSeleccionados').querySelector('.cantidad').innerText = producto.cantidad
                }
            })

            disminuirValorContador()
      
            totalPagar()

        })
    })
}