

const dataBaseProducts = [
    { id: 1, name: 'Vinho Tinto', price: 80, button: 'COMPRAR', img: '../img/vinho.svg' },
    { id: 2, name: 'Cerveja Heineken', price: 20, button: 'COMPRAR', img: '../img/heineken.svg' },
    { id: 3, name: 'Guaraná Antártica', price: 10, button: 'COMPRAR', img: '../img/refri.svg' },

];


const ulContainer = document.getElementById("ulProducts");


function renderProducts(obj) {

    obj.forEach((element, i) => {

        let liCard = document.createElement("li");
        liCard.classList = "boxCard";

        let imgCard = document.createElement("img");
        imgCard.classList = "imgCard"

        let titleCard = document.createElement("h2");
        let priceCard = document.createElement("p");
        let buttonCard = document.createElement("button");
        buttonCard.setAttribute("id", `${i}`);

        buttonCard.addEventListener("click", () => {
            location.href = `../pages/maiorIdadeTotal.html?id=${i}`
        });

        imgCard.src = element.img;
        titleCard.innerText = element.name;
        priceCard.innerText = `R$${element.price},00`;
        buttonCard.innerText = element.button;

        liCard.append(imgCard, titleCard, priceCard, buttonCard)
        ulContainer.appendChild(liCard);

    });
};
renderProducts(dataBaseProducts);
