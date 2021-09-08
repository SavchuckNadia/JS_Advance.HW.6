import {
    sell,
    sum,
    balance,
    s,
    beer,
    wine,
    pepsi
} from './shop.js'

const ADD = document.getElementById('add');
const BUY = document.getElementById('buy');
const PURCHASE = document.getElementById('purchase');
const STORAGE_BEER = document.getElementById('beer');
const STORAGE_WINE = document.getElementById('wine');
const STORAGE_PEPSI = document.getElementById('pepsi');
const BANK = document.getElementById('balance');

BANK.value = 1000 + ' грн';
STORAGE_BEER.value = 100 + ' шт.'
STORAGE_WINE.value = 50 + ' шт.'
STORAGE_PEPSI.value = 80 + ' шт.'
let COUNT = document.getElementById('count');
let choose;
let list = document.querySelector('.list');

function render() {
    BANK.value = balance() + 'грн';
    STORAGE_BEER.value = beer.count + 'шт.';
    STORAGE_WINE.value = wine.count + 'шт.';
    STORAGE_PEPSI.value = pepsi.count + 'шт.';
    COUNT.value = '';
    PURCHASE.innerHTML = ''
}
choose = beer;
document.forms.f1.addEventListener('click', function (event) {
    if (event.target.name == 'choose') {
        choose = event.target.value
    }
    return choose
})
let clickAdd = false;
let c;
ADD.addEventListener('click', function () {
    clickAdd = true
    c = COUNT.value;
    if (choose == beer.name) {
        choose = beer
    }
    if (choose == wine.name) {
        choose = wine
    }
    if (choose == pepsi.name) {
        choose = pepsi
    }
    if (c > 0 && c <= choose.count) {
        list.innerHTML += `<li>${sell(c,choose)}</li>`
        COUNT.value = '';
    } else if (c > choose.count && c !== choose.count) {
        document.querySelector('#exampleModal').style.display = 'block'
        document.querySelector('.modal-body').textContent = `Вибачте, але на складі залишилося  ${choose.name} ${choose.count} штук`
        COUNT.value = '';
    }

})

function closeModal(button) {
    document.querySelector(button).addEventListener('click', function () {
        document.querySelector('#exampleModal').style.display = 'none'
    })
}
closeModal('.close2');
closeModal('.btn-close');
BUY.addEventListener('click', function () {
    if (clickAdd == true && c > 0) {
        render()
        PURCHASE.innerHTML = list.innerHTML;
        PURCHASE.innerHTML += `<li>${sum()}</li>`;
        list.innerHTML = ''
    }
    clickAdd = false;
    s()
})