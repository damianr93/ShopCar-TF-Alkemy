import addHTML from './puppap.html?raw';
import './puppap.css';
import { renderizarProductosEnPuppap } from './productosEnPuppap';
import { vaciarCarrito } from '../../casos-de-usos/vaciar-carrito';
import { restarCantidadProducto, sumarCantidadProducto } from './modificar-cantidades';
import { totalPagar } from './valor-final';
import { comprar } from '../../casos-de-usos/compra';

const carrito = document.querySelector('.iconoCarrito');

/**
 * The function `renderPuppap` creates a pop-up container and adds event listeners to show and hide the
 * container when a button is clicked.
 * @param HTMLelement - The "element" parameter is the DOM element to which the puppap container will be
 * appended.
 */
export const renderPuppap = (element) => {

    const puppapContenedor = document.createElement('div')
    
    puppapContenedor.className = 'puppapDisplayNone';

    carrito.addEventListener('click',()=> {
    
        puppapContenedor.className = 'puppapContenedor'

        puppapContenedor.innerHTML = addHTML

        element.append(puppapContenedor)

        const contenedorProductos = document.querySelector('.productosContenedor')

        renderizarProductosEnPuppap(contenedorProductos)

        sumarCantidadProducto()

        restarCantidadProducto()

        totalPagar()

        comprar()

        vaciarCarrito()
    
    })

    puppapContenedor.addEventListener('click',(event) => {

        if(event.target.className === 'puppapContenedor')

        puppapContenedor.className = 'puppapDisplayNone'

    })

}
