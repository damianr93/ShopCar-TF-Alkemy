import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito";

/**
 * The function `actualizarValorContador` updates the value of a counter element based on the quantity
 * of items in a shopping cart.
 */
export const actualizarValorContador = () => {

    const contador = document.querySelector('.contador')
    
    const carrito = obtenerCarrito()
    
    let cantidadTotal = 0;
    
    carrito.forEach(producto => {
        
        let cantidadPorProducto = producto.cantidad

        cantidadTotal += cantidadPorProducto
    })
    
    contador.innerText = cantidadTotal;
}

/**
 * The function `eliminarValorContador` sets the value of a counter to 0.
 */
export const eliminarValorContador = () => {

    let contador = document.querySelector('.contador')

    contador.innerText = 0;


}

