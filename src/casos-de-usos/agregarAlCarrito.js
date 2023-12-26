
export let carrito =[]

export const limpiarCarrito = () => {

    carrito = []

}

export const obtenerCarrito = () => { return carrito }

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
    return carrito
}


