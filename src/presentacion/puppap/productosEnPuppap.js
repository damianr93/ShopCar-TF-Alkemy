import { obtenerCarrito } from "../../casos-de-usos/agregarAlCarrito";

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
