

const dataBaseProducts = [
    { id: 0, name: 'Vinho Tinto', price: 80, button: 'COMPRAR', img: '../img/vinho.svg' },
    { id: 1, name: 'Cerveja Heineken', price: 20, button: 'COMPRAR', img: '../img/heineken.svg' },
    { id: 2, name: 'Guaraná Antártica', price: 10, button: 'COMPRAR', img: '../img/refri.svg' },

];


const ulContainer = document.getElementById("ulProducts");

function checkTheAge() {
    let checkURL = new URLSearchParams(location.search);
    let maiorDeDezoito = checkURL.get("maior") === "Sim" ? true : false;

    let liMaiorDe18 = document.getElementsByClassName("maiorDe18");

    for (i in liMaiorDe18) {
        if (!liMaiorDe18[i].style) return true;

        if (maiorDeDezoito) {
            liMaiorDe18[i].style.display = 'flex';
        } else {
            liMaiorDe18[i].style.display = 'none';
        }
    }
}


function renderProducts(obj) {

    obj.forEach((element, i) => {

        let liCard = document.createElement("li");
        liCard.classList = "boxCard";

        if (i < 2) {
            liCard.classList.add("maiorDe18")
        }

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
