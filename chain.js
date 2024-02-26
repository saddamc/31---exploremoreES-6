// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];

console.log(data[0].name);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 63500},
        { id: 2, name: 'macbook', price: 155000}
    ]
}
// second product price 
console.log(products.data[0].price);

const user = {
    id: 5501,
    name: 'shariful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
    },
    city: 'Dhaka'
    }
}

console.log(user.address.street.second);
console.log(user.address.location?.street.second);
