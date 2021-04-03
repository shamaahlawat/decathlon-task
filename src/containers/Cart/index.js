import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {fetchProductsList,deleteProductFromCart,setQuantity} from './actions';
import cartSagas from './sagas'
import cartReducer from './reducer'
import AppBarHeader from '../../components/AppBar';

import './index.scss'

import {tshirts} from '../../assets'

function Cart(props) { 
    const {
        fetchProductsList,
        cartReducer,
        history,
        deleteProductFromCart,
        setQuantity
    } = props

    const [count,setCount] = useState(1)

    useEffect(() => {
        fetchProductsList()
    }, [])

    const deleteProduct = (id) => {
        deleteProductFromCart(id)
    }

    const handleDecrement = (id) => {
        if(count >= 0){
            setCount(count-1)
            let products = [...cartReducer.products_in_cart]
            products.map((product) => {
                if(product._id === id){
                   return product.quantity = count-1
                }
            })
            setQuantity(products)
        }
    }

    const handleIncrement = (id) => {
            setCount(count+1)
            let products = [...cartReducer.products_in_cart]
            products.map((product) => {
                if(product._id === id){
                   return product.quantity = count+1
                }
            })
            setQuantity(products)
    }

    return (
        <div className="cartContainer">
            <AppBarHeader productsData={cartReducer} history={history} />
            <div className="cartParent">
                  <Grid xs={7} className="box-shadow">
                      <div className="cartWrapper">Delivering to 2176 U/E jind</div>
                      <div className="cartWrapper">Free home delivery</div>
                      {
                          cartReducer.products_in_cart.map((product) => {
                              return <>
                                    <div className="cartItems flex flex-space-around">
                                    <div><img src={product.image} width={120} /></div>
                                    <div className="itemDetails">
                                        <div className="title">{product.name}</div>
                                        <div className="quantity">
                                            <span>Qty</span>
                                            <span className="incAndDec" onClick={() => handleDecrement(product._id)}>-</span>
                                            <span className="incAndDec">{product.quantity}</span>
                                            <span className="incAndDec" onClick={() => handleIncrement(product._id)}>+</span>
                                        </div>
                                    </div>
                                    <div className="itemDetails">
                                        <DeleteIcon className="cursor-pointer" onClick={() => deleteProduct(product._id)} />
                                        <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>{product.discount_price}</span></sub></div>
                                    </div>
                                </div>
                              </>
                          })
                      }
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
    fetchProductsList,
    deleteProductFromCart,
    setQuantity
  };

  export {cartSagas,cartReducer}
  export default connect(stateToProps, dispatchToProps) (Cart);