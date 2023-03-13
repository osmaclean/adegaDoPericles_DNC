const dataBaseProducts = [
    { id: 0, name: 'Vinho Tinto', price: 80, button: 'COMPRAR', img: '../img/vinho.svg' },
    { id: 1, name: 'Cerveja Heineken', price: 20, button: 'COMPRAR', img: '../img/heineken.svg' },
    { id: 2, name: 'Guaraná Antártica', price: 10, button: 'COMPRAR', img: '../img/refri.svg' },

];


const sectionProductTotal = document.getElementById("container");

function getIdURL(obj) {

    const parametroURL = new URLSearchParams(location.search);
    const productID = parametroURL.get('id');

    if (productID) {
        const product = obj.find(p => p.id == productID);

        if (product) {
            let p = document.createElement('p');
            p.setAttribute("class", "valorTotal");

            p.innerText = `Olá! O valor total a ser pago pelo produto ${product.name} é de: R$${product.price},00`
            sectionProductTotal.appendChild(p);
        }
    }
}

getIdURL(dataBaseProducts);