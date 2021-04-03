import React from 'react'
import AppBarHeader from '../../components/AppBar'
import ProductCard from './Components/ProductCard'
import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'
import './index.scss';

let products_list = [
    {
        name:'AWG ALL WEATHER GEAR',
        description:`Men's Regular Fit T-Shirt (Pack of 4)`,
        discount_price: 320,
        actual_price:400,
        image:tshirts
    },
    {
        name:'Forest Club',
        description:'Shorts for Men | Light Weight | Casual Wear | Sports Shorts',
        discount_price: 320,
        actual_price:700,
        image:shorts
    },
    {
        name:'WORLD WEAR FOOTWEAR',
        description:`Exclusive Range of Casual Sports Running Shoes for Men`,
        discount_price: 255,
        actual_price:998,
        image:shoes
    },
    {
        name:'Neu Look',
        description:'Neu Look Gym wear Leggings Ankle Length Stretchable Workout Tights / Sports Leggings / Sports Fitness Yoga Track Pants for Girls & Women_GT34',
        discount_price: 449,
        actual_price:1399,
        image:pants
    },
    {
        name:'Travel Backpack 50 Liters TRAVEL 500 Grey',
        description:'Our backpack designers created this backpack to give you complete peace of mind for several weeks on your adventures. A backpack specially-designed and developed for backpackers with a large integrated opening on the back of the bag, pockets that can be padlocked and a detachable shoulder bag.',
        discount_price: 5299,
        actual_price:7999,
        image:bag
    },
    {
        name:'CAMPING TENT 2 SECONDS EASY - FRESH & BLACK - 2 PERSON',
        description:`A surprise weekend? Our designers have spent time developing the 2 person tent that you can pitch in a few minutes. Guaranteed mobility!. Enjoy time-saving at its best: the new 2 Second system is as quick to put up as it is to fold away. There are better things to do on holiday than set up camp!`,
        discount_price: 7999,
        actual_price:9999,
        image:camp
    },
    {
        name:'ADULT SNORKELING MASK EASYBREATH 500 - DARK TURQUOISE',
        description:`We designed the Easybreath 500, the second generation of our full-face mask, to offer a better experience for seeing and breathing in and out of the water. Thanks to the panoramic field of vision and the ability to breathe through your nose and mouth, it's never been easier to discover the underwater world than with the Easybreath 500 snorkelling mask.`,
        discount_price: 1799,
        actual_price:2499,
        image:snorkelingmask
    }
]

function DashboardPage(props) { 
    return (
        <div className="dashboardContainer">
            <AppBarHeader />
            <div className="productList">
                {
                    products_list.map((product) => {
                        return <ProductCard product={product} />
                    }) 
                }
            </div>
      </div>
    );
}

export default DashboardPage;