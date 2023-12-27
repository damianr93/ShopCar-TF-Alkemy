

/**
 * The function `seleccionProducto` takes in an array of products and a callback function, and adds
 * event listeners to buttons on the page to select a product and invoke the callback with the selected
 * product.
 * @param productos - An array of products.
 * @param callback - The `callback` parameter is a function that will be called when a product is
 * selected. It takes the selected product as an argument.
 */
export const seleccionProducto = (productos, callback) => {

    let idProducto

    const buttons = document.querySelectorAll('button') 

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {

            idProducto = event.target.id
      
            const productoSeleccionado = productos.find(producto => parseInt(idProducto) === producto.id);

            callback(productoSeleccionado)
        })
    })
}




