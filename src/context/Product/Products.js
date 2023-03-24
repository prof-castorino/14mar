export const getProducts = () => {
    var products = [
        {
            img: require('../../../assets/alface.jpg'),
            title: 'Alface',
            descrition: 'Unidade',
            price: 3,
        }, {
            img: require('../../../assets/cenouras.jpg'),
            title: 'Cenoura',
            descrition: 'pacote',
            price: 7,

        }, {
            img: require('../../../assets/tomates.jpg'),
            title: 'Tomate',
            descrition: 'o kilo',
            price: 10,
        }
    ]
    return products
}