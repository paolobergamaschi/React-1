const products = [
    {
        id:'1',
        name:'Camiseta Argentina 2022',
        price: '34.000',
        category:'Actuales',
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa700745374e41f9809daf7300e7d173_9366/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3592_01_laydown.jpg',
        stock:10,
        description:'Camiseta Argentina Titular Campeon 2022.'
    },
    {
        id:'2',
        name:'Camiseta Independiente 2023',
        price: '30.000',
        category:'Actuales',
        img:'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb9d3e552/products/PU606527-04/PU606527-04-1.JPG',
        stock:30,
        description:'Camiseta Independiente titular 2023.'
    },
    {
        id:'3',
        name:'Camiseta Francia 1998',
        price: '25.000',
        category:'Retro',
        img:'https://acdn.mitiendanube.com/stores/002/292/348/products/61c1b8de1-12caf67a1ebeda29b616717348399300-1024-1024.jpg',
        stock:5,
        description:'Camiseta Francia campeon 1998 Retro.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}