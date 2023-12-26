
let cantidadProductos = 0;

export const incrementarValorContador = () => {
    
    let contador = document.querySelector('.contador')

    cantidadProductos += 1

    contador.innerText = cantidadProductos;

}

export const disminuirValorContador = () => {
    
    let contador = document.querySelector('.contador')

    cantidadProductos -= 1

    contador.innerText = cantidadProductos;

}

export const eliminarValorContador = () => {

    let contador = document.querySelector('.contador')

    cantidadProductos = 0;

    contador.innerText = 0;


}

