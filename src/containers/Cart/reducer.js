import {
    FETCH_PRODUCTS_LIST,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SET_QUANTITY,
    EMPTY_CART
} from './constants';

import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'

const INITIAL_STATE = {
    loader:false,
    products_list:[],
    products_in_cart:[]
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    
    switch (type) {
        case `${FETCH_PRODUCTS_LIST}_PENDING`: {
            return {
                ...state,
                loader:true
            };
        }
        case `${FETCH_PRODUCTS_LIST}_SUCCESS`: {
            return {
                ...state,
                products_list: [{
                    _id:45378,
                    name:'AWG ALL WEATHER GEAR',
                    description:`Men's Regular Fit T-Shirt (Pack of 4)`,
                    discount_price: 320,
                    actual_price:400,
                    image:tshirts,
                    quantity:1
                },
                {
                    _id:35797,
                    name:'Forest Club',
                    description:'Shorts for Men | Light Weight | Casual Wear | Sports Shorts',
                    discount_price: 320,
                    actual_price:700,
                    image:shorts,
                    quantity:1
                },
                {
                    _id:84679,
                    name:'WORLD WEAR FOOTWEAR',
                    description:`Exclusive Range of Casual Sports Running Shoes for Men`,
                    discount_price: 255,
                    actual_price:998,
                    image:shoes,
                    quantity:1
                },
                {
                    _id:5789,
                    name:'Neu Look',
                    description:'Neu Look Gym wear Leggings Ankle Length Stretchable Workout Tights / Sports Leggings / Sports Fitness Yoga Track Pants for Girls & Women_GT34',
                    discount_price: 449,
                    actual_price:1399,
                    image:pants,
                    quantity:1
                },
                {
                    _id:689,
                    name:'Travel Backpack 50 Liters TRAVEL 500 Grey',
                    description:'Our backpack designers created this backpack to give you complete peace of mind for several weeks on your adventures. A backpack specially-designed and developed for backpackers with a large integrated opening on the back of the bag, pockets that can be padlocked and a detachable shoulder bag.',
                    discount_price: 5299,
                    actual_price:7999,
                    image:bag,
                    quantity:1
                },
                {
                    _id:323,
                    name:'CAMPING TENT 2 SECONDS EASY - FRESH & BLACK - 2 PERSON',
                    description:`A surprise weekend? Our designers have spent time developing the 2 person tent that you can pitch in a few minutes. Guaranteed mobility!. Enjoy time-saving at its best: the new 2 Second system is as quick to put up as it is to fold away. There are better things to do on holiday than set up camp!`,
                    discount_price: 7999,
                    actual_price:9999,
                    image:camp,
                    quantity:1
                },
                {
                    _id:12323,
                    name:'ADULT SNORKELING MASK EASYBREATH 500 - DARK TURQUOISE',
                    description:`We designed the Easybreath 500, the second generation of our full-face mask, to offer a better experience for seeing and breathing in and out of the water. Thanks to the panoramic field of vision and the ability to breathe through your nose and mouth, it's never been easier to discover the underwater world than with the Easybreath 500 snorkelling mask.`,
                    discount_price: 1799,
                    actual_price:2499,
                    image:snorkelingmask,
                    quantity:1
                }],
                loader:false,
            };
        }
        case `${FETCH_PRODUCTS_LIST}_FAILED`: {
            return {
                ...state,
                loader:false
            };
        }

        case `${ADD_TO_CART}`: {
            return {
                ...state,
                products_in_cart:[...state.products_in_cart , {...payload}]
            };
        }
        case `${DELETE_FROM_CART}`: {
            const deleteItem = state.products_in_cart.filter((product) => product._id !== payload)
            return {
                ...state,
                products_in_cart:deleteItem
            };
        }
        case `${SET_QUANTITY}`: {
            return {
                ...state,
                products_in_cart:payload
            };
        }
        case `${EMPTY_CART}`: {
            return {
                ...state,
                products_in_cart:[]
            };
        }

        default:
            return state;
    }
};

export default reducer;
