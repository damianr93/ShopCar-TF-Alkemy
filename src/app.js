import { agregarAlCarro } from "./casos-de-usos/agregarAlCarrito"
import { seleccionProducto } from "./casos-de-usos/seleccion"
import { tarjetaDeProducto } from "./presentacion/productos/crear-presentacion-productos"
import { obtenerProductos } from "./presentacion/productos/productos"
import { actualizarValorContador } from "./presentacion/puppap/cantidad-productos"


(async() => {

    const productos = await obtenerProductos()
    tarjetaDeProducto(productos, HTMLelement)
    
    seleccionProducto(productos, productos => {
    
        agregarAlCarro(productos)
        actualizarValorContador()
    
    })

})()

const HTMLelement = document.querySelector('.productos')
