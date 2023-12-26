import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito"

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