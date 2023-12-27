
let carrito =[]

/**
 * The function `limpiarCarrito` clears the contents of the `carrito` array.
 */
export const limpiarCarrito = () => { carrito = [] }

/**
 * The function "actualizarCarrito" updates the value of the variable "carrito" with a new value.
 * @param nuevoCarrito - The parameter "nuevoCarrito" is a new array that represents the updated
 * shopping cart.
 */
export const actualizarCarrito = (nuevoCarrito) => { return carrito = nuevoCarrito}

/**
 * The function "obtenerCarrito" returns the value of the variable "carrito".
 * @returns the value of the variable "carrito".
 */
export const obtenerCarrito = () => { return carrito }

/**
 * The function `agregarAlCarro` adds a selected product to the shopping cart, updating the quantity if
 * the product already exists in the cart.
 * @param productoSeleccionado - The parameter "productoSeleccionado" is an object that represents the
 * selected product. It should have the following properties:
 * @returns the updated carrito array.
 */
export const agregarAlCarro = (productoSeleccionado) => {

    let productoEnCarrito = {}
       
    const productoExiste = carrito.find(producto => producto.id === productoSeleccionado.id)

    if(productoExiste) {

        carrito = carrito.map(producto => {

            if(producto.id === productoSeleccionado.id) 

            producto.cantidad += 1

            return producto
        })
        
    } else {

        productoEnCarrito = {

            id : productoSeleccionado.id,
            title: productoSeleccionado.title,
            price: productoSeleccionado.price,
            cantidad: 1
        }
        carrito.push(productoEnCarrito)
    }    
}


