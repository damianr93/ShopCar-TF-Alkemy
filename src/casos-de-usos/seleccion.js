import { incrementarValorContador } from "../presentacion/puppap/cantidad-productos"


export const seleccionProducto = (productos, callback) => {

    let idProducto

    const buttons = document.querySelectorAll('button') 

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {

            idProducto = event.target.id
      
            const productoSeleccionado = productos.find(producto => parseInt(idProducto) === producto.id);

            incrementarValorContador()

            callback(productoSeleccionado)
        })
    })
}




