
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

