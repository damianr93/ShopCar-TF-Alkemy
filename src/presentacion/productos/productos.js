

/**
 * The function "obtenerProductos" fetches a list of products from a fake store API and returns them as
 * a JSON object.
 * @returns The function `obtenerProductos` is returning a promise that resolves to an array of
 * products.
 */
export const obtenerProductos = async() => {

    const response = await fetch('https://fakestoreapi.com/products?limit=10')
  
    const productos = await response.json()
  
    return productos

}