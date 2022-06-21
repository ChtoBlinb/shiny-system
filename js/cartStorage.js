export class CartStorage {
    static PRODUCT_KEY = 'product-storage'
    static EmptyCart = []
  
    constructor() {
      this.listeners = []
  
      if (!this.checkStorage()) this.defineStorage()
      this.cart = this.getCart()
    }

    checkStorage() {
      return Boolean(localStorage.getItem(CartStorage.PRODUCT_KEY))
    }

    defineStorage() {
      localStorage.setItem(CartStorage.PRODUCT_KEY, JSON.stringify(CartStorage.EmptyCart))
    }

    getCart() {
      try {
        return JSON.parse(localStorage.getItem(CartStorage.PRODUCT_KEY))
      } catch (e) {
        this.defineStorage()
      }
    }

    setItem(product) {
      if (!product) return false;
      const foundProduct = this.findInStorageById(product.cosmeticsId)
      if(foundProduct) return false;
      
      this.cart.push(product)
      this._replaceStorageCart(this.cart)
      this._notify()

      return true
    }

    findInStorageById(cosmeticsId) {

      return this.cart.find(cart => cart.cosmeticsId === cosmeticsId)
    }

    removeCartElemById(id) {
      const newCart = this.cart.filter(cart => cart.cosmeticsId != cosmeticsId)
      this.cart = newCart
      this._replaceStorageCart(newCart)
      this._notify()
    }

    subscribe(callback) {
      this.listeners.push(callback)
    }

    _replaceStorageCart(newCart) {
      localStorage.setItem(CartStorage.PRODUCT_KEY, JSON.stringify(newCart))
    }

    _notify() {
      this.listeners.forEach((listener) => listener(this.cart))
    }
    getSummary() {
      return this.cart.reduce((acc, item) => acc + item.cosmeticsPrice, 0);
    }
  }

export const cartStorage = new CartStorage()