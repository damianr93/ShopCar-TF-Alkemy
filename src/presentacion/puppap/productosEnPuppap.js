import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito";

/**
 * The function `renderizarProductosEnPuppap` takes an HTML element as a parameter and renders a list
 * of products with their quantity, name, price, and buttons for adding or removing them from the cart.
 * @param HTMLelement - The HTMLelement parameter is the HTML element where you want to render the
 * products. It should be a valid DOM element, such as a div or a section.
 */
export const renderizarProductosEnPuppap = (HTMLelement) => {

    const carrito = obtenerCarrito()

    if (carrito) {

        carrito.forEach(producto => {

            HTMLelement.innerHTML +=
            `<div id="${producto.id}" class="productosSeleccionados">
                <div class="cantidad">${producto.cantidad}</div>
                <div class="nombre">${producto.title}</div>
                <div class="precio">$${producto.price}</div>
                <div class="buttons">
                    <button class="agregar">+</button>
                    <button class="quitar">-</button>
                </div>
            </div>`

        });

    }

}
