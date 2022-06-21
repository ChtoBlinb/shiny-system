import { cartStorage } from './cartStorage.js'
import { productsRepository } from './productsRepository.js'


const cardsMenu = document.querySelector('.cards-menu')

const cardButton = document.querySelector(".button")



const renderItems = (data) => {
    cardsMenu.innerHTML = ''

    data.forEach(({ cosmeticsCharacteristic1, cosmeticsCharacteristic2, cosmeticsCharacteristic3, cosmeticsCharacteristic4, cosmeticsId, cosmeticsImage, cosmeticsName, cosmeticsPrice }) => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
        
                            <img src="${cosmeticsImage}" alt="${cosmeticsName}" class="card-image" />
                            <div class="card-text">
                                <div class="card-heading">
                                    <h3 class="card-name card-name-model">${cosmeticsName}</h3>
                                </div>
                                <div class="card-info">
                                    <div class="characteristic">
                                    ${cosmeticsCharacteristic1}
                                    <div class="characteristic">
                                    ${cosmeticsCharacteristic2}
                                    <div class="characteristic">
                                    ${cosmeticsCharacteristic3}
                                    <div class="characteristic">
                                    ${cosmeticsCharacteristic4}
                                    </div>
                                </div>
                                <div class="card-price">
                                    ${cosmeticsPrice} ₽
                                </div>
                                <div class="card-buttons">
                                    <button disable="${Boolean(cartStorage.findInStorageById(cosmeticsId))}" class="button button-primary button-add-cart" data-id="${cosmeticsId}">
                                        <span class="button-card-text" data-id="${cosmeticsId}">В корзину</span>
                                        <span class="button-cart-svg" data-id="${cosmeticsId}"></span>
                                    </button>
                                </div>
                            </div>
        `



        cardsMenu.append(card)
    });
}
productsRepository.getProducts().then(renderItems)
'2' == 2
cardsMenu.addEventListener("click", (e) => {
    const cosmeticsdId = e.target?.getAttribute('data-id')
    if (!cosmeticsdId) return;
    const product = productsRepository.getProductById(cosmeticsdId)
    if (!product) return;

    const isSuccess = cartStorage.setItem(product)
    if (!isSuccess) return;
    renderItems(productsRepository.products)
})
