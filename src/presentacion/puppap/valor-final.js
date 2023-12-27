import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito"

/**
 * The function calculates the total price of items in a shopping cart and updates the displayed price.
 * @returns the total amount to be paid, rounded to 2 decimal places.
 */
export const totalPagar = () => {

    const precio = document.querySelector('.precioPagar')

    const carrito = obtenerCarrito()

    let total = 0;

    carrito.forEach(producto => {

        let valorPorProductos = producto.price * producto.cantidad

        total += valorPorProductos

    })

    precio.innerText = total.toFixed(2)

    return total.toFixed(2)

}