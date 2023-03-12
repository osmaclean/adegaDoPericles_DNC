

const dataBaseProducts = [
    { name: 'Vinho Tinto', price: 80, button: 'COMPRAR', img: '../img/vinho.svg' },
    { name: 'Cerveja Heineken', price: 20, button: 'COMPRAR', img: '../img/heineken.svg' },
    { name: 'Guaraná Antártica', price: 10, button: 'COMPRAR', img: '../img/refri.svg' },

];


const ulContainer = document.getElementById("ulProducts");


function renderProducts(obj) {

    obj.forEach(element => {

        let liCard = document.createElement("li");
        liCard.classList = "boxCard";

        let imgCard = document.createElement("img");
        imgCard.classList = "imgCard"

        let titleCard = document.createElement("h2");
        let priceCard = document.createElement("p");
        let buttonCard = document.createElement("button");
        buttonCard.setAttribute("id", "redirect")
        buttonCard.setAttribute("onclick", "redirect()") // Chamando a função de redirect

        imgCard.src = element.img;
        titleCard.innerText = element.name;
        priceCard.innerText = `R$${element.price},00`;
        buttonCard.innerText = element.button;

        liCard.append(imgCard, titleCard, priceCard, buttonCard)
        ulContainer.appendChild(liCard)

    });
}
renderProducts(dataBaseProducts);


let buttonCardSelect = document.getElementById("redirect");
buttonCardSelect.addEventListener