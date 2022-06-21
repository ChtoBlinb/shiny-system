const cardsBrands = document.querySelector('.cards-brands')

const renderItems = (data) => {
    data.forEach((item) => {
        const { brandImage, brandName, brandFile} = item
        const a = document.createElement('a')

        a.setAttribute('href', '/products.html')
        a.classList.add('card')
        a.classList.add('card-brand')

        a.dataset.brandFile = brandFile

        a.innerHTML = `
            <img src="${brandImage}" alt="${brandImage}" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-name">${brandName}</h3>
                            </div>
                        </div>

        `
        a.addEventListener('click', (e) => {
            e.preventDefault()

            localStorage.setItem('brand', JSON.stringify(item))
            window.location.href = '/products.html'
        })
        cardsBrands.append(a)
    });
}



fetch(`./db/brand.json`)
    .then((Response) => Response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })