let tS = 0
let bank = 1000;

function sell(count, product) {
    if (count <= product.count) {
        let total = count * product.price;
        bank += total;
        tS += total;
        product.count -= count;
        product.count + 'шт.'
        return `${product.nameU}:${count} шт.`
    }
    if (count > product.count) {
        return `Вибачте, але на складі залишилося  ${product.name} ${product.count} штук`
    }
}

function balance() {
    return bank
}

function sum() {
    return `Всього:${tS} гривень`
}

function s() {
    tS = 0;
}
let beer = {
    count: 100,
    price: 45,
    name: 'beer',
    nameU: 'Пиво'
}
let wine = {
    count: 50,
    price: 150,
    name: 'wine',
    nameU: 'Вино',
}
let pepsi = {
    count: 80,
    price: 30,
    name: 'pepsi',
    nameU: 'Пепсі',
}

export {
    sell as sell, sum as sum, balance as balance, s as s, beer, wine, pepsi, bank
}
