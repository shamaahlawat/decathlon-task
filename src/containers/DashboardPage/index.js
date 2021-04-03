import React , {useState,useEffect} from 'react'
import { connect } from 'react-redux';

import {fetchProductsList} from '../Cart/actions';
import AppBarHeader from '../../components/AppBar'
import ProductCard from './Components/ProductCard'

// import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'
import './index.scss';

function DashboardPage(props) { 
    const {
        fetchProductsList,
        cartReducer
    } = props

    useEffect(() => {
        fetchProductsList()
    }, [])
   console.log('cartReducer',cartReducer)

    return (
        <div className="dashboardContainer">
            <AppBarHeader />
            <div className="productList">
                {
                    cartReducer.products_list.map((product) => {
                        return <ProductCard product={product} />
                    }) 
                }
            </div>
      </div>
    );
}

const stateToProps = (state) => {
    const cartReducer = state.cartReducer;
  
    return {
      cartReducer,
    };
  };
  const dispatchToProps = {
    fetchProductsList
  };

export default connect(stateToProps, dispatchToProps) (DashboardPage);
