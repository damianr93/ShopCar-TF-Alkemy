import { agregarAlCarro } from "./casos-de-usos/agregarAlCarrito"
import { seleccionProducto } from "./casos-de-usos/seleccion"
import { tarjetaDeProducto } from "./presentacion/productos/crear-presentacion-productos"
import { obtenerProductos } from "./presentacion/productos/productos"


(async() => {

    const productos = await obtenerProductos()
    tarjetaDeProducto(productos, HTMLelement)
    
    seleccionProducto(productos, productos => {
    
        agregarAlCarro(productos)
    
    })

})()

const HTMLelement = document.querySelector('.productos')
