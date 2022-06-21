import {CartStorage} from './cartStorage.js'
import {productsRepository} from './productsRepository.js'
// z98972q3
//JeyCSP0n
const catalogContainer = document.querySelector('.cart')

let cartStorage = new CartStorage()

const clearButton = document.querySelector(".clear-button");

console.log(cartStorage)

let produtctsHTML = ''

function renderProduct(product, index) {
  produtctsHTML += `<div class="cart-card ${index}"  data-value="${index}">
                        <img  class="cart-cosmeticsImage" src="${product.cosmeticsImage}" alt="cosmetics">
                        <h3 class="cart-cosmeticsName">${product.cosmeticsName}</h3>
                        <div class="cart-cosmeticsPrice">Стоимость: ${numberFormat(product.cosmeticsPrice)}</div>
                        <div class="cart-cosmeticsCharacteristic2">${product.cosmeticsCharacteristic2}</div>
                        <div class="cart-cosmeticsCharacteristic3">${product.cosmeticsCharacteristic3}</div>
                        <div class="cart-cosmeticsCharacteristic4">${product.cosmeticsCharacteristic4}</div>
                      </div>`
}

  cartStorage.getCart().forEach(renderProduct)
  
  cartStorage.subscribe((cart) => {
    catalogContainer.innerHTML = ''
    produtctsHTML = ''
    cart.forEach(renderProduct)
    catalogContainer.innerHTML = produtctsHTML
  })
  
  catalogContainer.innerHTML = produtctsHTML
  
  
  catalogContainer.addEventListener("click", (e) => {
    const target = e.target
    const id = target.getAttribute('data-id')
    if (!id) return;
  
    const inCart = stringToBoolean(target.getAttribute('data-is-in-cart'))
    if (inCart) return;
  
    cartStorage.removeCartElemById(id)
  
    target.setAttribute('data-is-in-cart', true)
  
  })
  
  function numberFormat(number){
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
  }
  
  const $summary = document.querySelector(".order-sum-price")
  $summary.textContent =  numberFormat(cartStorage.getSummary())

  cartStorage.subscribe(() => {
    $summary.textContent = numberFormat(cartStorage.getSummary())
  })
  
  if (cartStorage.getCart().length === 0){
    catalogContainer.innerHTML = '<div class="cart-notification">Ваша корзина пуста!</div>'
    
  }
  

clearButton.onclick = function(){
  catalogContainer.innerHTML = localStorage.removeItem("product-storage")
  catalogContainer.innerHTML = '<div class="cart-notification">Ваша корзина пуста!</div>'
  document.querySelector(".order-sum-price").innerHTML = '0,00 ₽'
  console.log(catalogContainer)
}



