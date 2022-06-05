const products = [
    {
        id: '1',
        name: 'El juguete rabioso',
        author: 'Roberto Arlt',
        price: 1200,
        genre: 'novela',
        img: 'https://images.bajalibros.com/et3G_pp6Ru8p9H2OlW6eOk989I8=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast15136_88f6eb21a49df0a5198526a69f549faf8ee77d10_cover.jpg',
        stock: 25,
        description: 'Silvio Astier, el protagonista de esta novela, es inteligente, de opiniones agudas y culto, pero vive en un entorno social pobre y limitado. En su lucha por escapar de esa realidad forma con sus amigos el Club de los Caballeros de la Media Noche, con los que se dedica a llevar a cabo pequeños hurtos, como su héroe de la ficción, Rocambole.',
    },
    {id: '2', name: 'La Casa de Bernarda Alba', author: 'Federico Garcia Lorca', price: 730, genre: 'obra de teatro', img: 'https://contentv2.tap-commerce.com/cover/large/9789505811052_1.jpg?id_com=1113', stock: 15, description: 'Fruto capital del universo lorquiano, esta obra sin parangón recoge la historia de Bernarda Alba, enviudada por segunda vez a los sesenta años, y de sus hijas, obligadas a sumirse en un luto que desencadenará la tragedia'},
    {id: '3', name: 'El Cid Campeador', author: 'Anonimo', price: 1300, genre: 'poesia', img: 'https://contentv2.tap-commerce.com/cover/large/9788497400244_1.jpg?id_com=1113', stock: 31, description: 'Poema de mio Cid es un cantar de gesta anónimo que relata hazañas heroicas inspiradas libremente en los últimos años de la vida del caballero castellano Rodrigo Díaz el Campeador.'}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}