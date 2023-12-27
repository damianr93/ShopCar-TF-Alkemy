
/**
 * The function `tarjetaDeProducto` takes an array of products and an HTML element as parameters, and
 * dynamically generates HTML code to display each product as a card on the webpage.
 * @param productos - An array of objects representing different products. Each object should have the
 * following properties:
 * @param HTMLElement - The HTMLElement parameter is the element in the HTML document where you want to
 * display the product cards. It should be a valid DOM element, such as a div or section, where the
 * product cards will be appended.
 */
export const tarjetaDeProducto = async(productos, HTMLElement) => {

    productos.forEach(producto => {

        HTMLElement.innerHTML += `
        
        <article>
            <a href="${producto.image}" target="_blank">
                <div class="contenedorImg">
                    <img src="${producto.image}" alt="${producto.image}">
                </div>
            </a>
            <h3>
                ${producto.title}
            </h3>
            <p>
                ${producto.description}
            </p>
            <div class="precioCompra">
          
            <span>${producto.price}$</span>
            <button class="compraButton" id="${producto.id}">Comprar</button>
        
            </div>
        </article>

        ` 
    });
}

