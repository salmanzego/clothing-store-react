import tees from '../../assets/images/black_tees.jpg';

export const cart = [
    {
        _id: "65b21a44ca895031d2ffa3a7",
        customerId: "65a919d125081dc73641f4b4",
        products: [
            {
                name: 'Red Plaid Shirt',
                shortDesc: 'Classic red plaid shirt for a casual look',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
                size: 'L',
                price: 799,
                imgUrl: tees,
                stock: 18,
                quantity: 1,
                category: 'tees',
                trending: true,
            },
            {
                name: 'Black Leather Jacket',
                shortDesc: 'Stylish black leather jacket for a rugged look',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
                size: 'M',
                price: 1499,
                imgUrl: tees,
                stock: 10,
                quantity: 1,
                category: 'sweaters',
                trending: true,
            },
            {
                name: 'Blue Denim Jeans',
                shortDesc: 'Classic blue denim jeans for everyday wear',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
                size: 'S',
                price: 899,
                imgUrl: tees,
                stock: 25,
                quantity: 2,
                category: 'hoodies',
                trending: false,
            },
            {
                name: 'White T-shirt',
                shortDesc: 'Simple white t-shirt for a clean look',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
                size: 'S',
                price: 299,
                imgUrl: tees,
                stock: 30,
                quantity: 1,
                category: 'sweaters',
                trending: false,
            },
            {
                name: 'Canvas Backpack',
                shortDesc: 'Durable canvas backpack for everyday use',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
                size: 'M',
                price: 599,
                imgUrl: tees,
                stock: 15,
                quantity: 3,
                category: 'hoodies',
                trending: true,
            }
        ],
        totalAmount: 4595
    },
    {
        _id: "65b21a44ca895031d2ffa3a8",
        customerId: "65a919d125081dc73641f4b5",
        products: [],
        totalAmount: 0
    }
];
