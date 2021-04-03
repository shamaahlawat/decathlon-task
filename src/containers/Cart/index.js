import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {fetchProductsList} from './actions';
import cartSagas from './sagas'
import cartReducer from './reducer'
import AppBarHeader from '../../components/AppBar';

import './index.scss'

import {tshirts} from '../../assets'

function Cart(props) { 
    const {
        fetchProductsList,
        cartReducer
    } = props

    useEffect(() => {
        fetchProductsList()
    }, [])

    return (
        <div className="cartContainer">
            <AppBarHeader />
            <div className="cartParent">
                  <Grid xs={7} className="box-shadow">
                      <div className="cartWrapper">Delivering to 2176 U/E jind</div>
                      <div className="cartWrapper">Free home delivery</div>
                      <div className="cartItems flex flex-space-around">
                          <div><img src={tshirts} width={120} /></div>
                          <div className="itemDetails">
                              <div className="title">KALENJI RUN 100 MEN'S RUNNING SHOES - GREY</div>
                              <div className="quantity">
                                  <span>Qty</span>
                                  <span>-</span>
                                  <span></span>
                                  <span>+</span>
                              </div>
                          </div>
                          <div className="itemDetails">
                              <DeleteIcon />
                              <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>45678</span></sub></div>
                          </div>
                      </div>
                      <div className="cartItems flex flex-space-around">
                          <div><img src={tshirts} width={120} /></div>
                          <div className="itemDetails">
                              <div className="title">KALENJI RUN 100 MEN'S RUNNING SHOES - GREY</div>
                              <div className="quantity">
                                  <span>Qty</span>
                                  <span>-</span>
                                  <span></span>
                                  <span>+</span>
                              </div>
                          </div>
                          <div className="itemDetails">
                              <DeleteIcon />
                              <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>45678</span></sub></div>
                          </div>
                      </div>
                  </Grid>
                  <Grid xs={4} className="box-shadow">
                      shama
                  </Grid>
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

  export {cartSagas,cartReducer}
  export default connect(stateToProps, dispatchToProps) (Cart);