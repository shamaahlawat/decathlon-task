import React , {useState,useEffect} from 'react'
import { connect } from 'react-redux';

import {fetchProductsList,addProductsToCart} from '../Cart/actions';
import {logoutUser} from '../Authentication/actions'
import AppBarHeader from '../../components/AppBar'
import ProductCard from './Components/ProductCard'

// import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'
import './index.scss';

function DashboardPage(props) { 
    const {
        fetchProductsList,
        addProductsToCart,
        cartReducer,
        history,
        authenticationReducer,
        logoutUser
    } = props

    useEffect(() => {
        fetchProductsList()
    }, [])

    return (
        <div className="dashboardContainer">
            <AppBarHeader history={history} productsData ={cartReducer} authenticationReducer={authenticationReducer} logoutUser={logoutUser} />
            <div className="productList">
                {
                    cartReducer.products_list.map((product) => {
                        return <ProductCard product={product} addProductsToCart={addProductsToCart} />
                    }) 
                }
            </div>
      </div>
    );
}

const stateToProps = (state) => {
    const cartReducer = state.cartReducer;
    const authenticationReducer = state.authenticationReducer;
  
    return {
      cartReducer,
      authenticationReducer
    };
  };
  const dispatchToProps = {
    fetchProductsList,
    addProductsToCart,
    logoutUser
  };

export default connect(stateToProps, dispatchToProps) (DashboardPage);
