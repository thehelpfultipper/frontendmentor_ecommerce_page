import {prod_1_thumb} from '../assets/index';

export const MENU = [
    'Collections',
    'Men',
    'Women',
    'About',
    'Contact'
];

export const PRODUCTS = [
    {
        id: Math.floor(Math.random() * 10),
        brand: 'Sneaker Company',
        name: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outter sole, they\'ll withstand everything the weather can offer.',
        currentPrice: 125,
        fullPrice: 250,
        sale: 0.5,
        img: {
            thumb: prod_1_thumb
        }
    }
]