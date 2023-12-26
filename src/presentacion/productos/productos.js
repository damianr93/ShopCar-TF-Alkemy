

export const obtenerProductos = async() => {

    const response = await fetch('https://fakestoreapi.com/products?limit=10')
  
    const productos = await response.json()
  
    return productos

}