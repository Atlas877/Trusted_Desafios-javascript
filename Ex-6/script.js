
let products = [
    {name: "Computador", category: "Eletrónicos", price: 800},
    {name: "Telemóvel", category: "Eletrónicos" , price: 500},
    {name: "Teclado", category: "Acessórios", price: 80}

];

let myList = document.getElementById('productList');

for(i = 0; i < products.length; i++) {

    let product = products[i];

    let listItem = document.createElement("li");

    listItem.textContent = product.name + "(" + product.category + "): " + product.price + " € ";

    myList.appendChild(listItem);
}