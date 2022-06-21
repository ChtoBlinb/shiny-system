class ProductsRepository {
    constructor() {
        this.products = []
    }
    async getProducts() {
      try {
        const brand = JSON.parse(localStorage.getItem('brand'))
        const productsFetch = await fetch(`/db/${brand.brandFile}`)
        this.products = await productsFetch.json()
        return this.products
      } catch (e) {
        console.log(e)
      }
  
    }

    getProductById(cosmeticsId) {
        return this.products.find((product) => product.cosmeticsId === cosmeticsId)
    }
  }
 

  export const productsRepository = new ProductsRepository()