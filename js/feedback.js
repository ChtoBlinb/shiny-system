import {CartStorage} from './cartStorage.js'


const cartStorage = new CartStorage()

function numberFormat(number){
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
}

const $summary = document.querySelector("#feedback-order-sum")
$summary.value =  numberFormat(cartStorage.getSummary())

cartStorage.subscribe(() => {
    $summary.value = numberFormat(cartStorage.getSummary())
})

const $name = document.querySelector("#feedback-order-name")

for(let i = 0; i<cartStorage.getCart().length; i++){
    $name.value += cartStorage.getCart()[i].cosmeticsName + ", "
}

