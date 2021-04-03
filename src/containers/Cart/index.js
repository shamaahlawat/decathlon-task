import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import {fetchProductsList,deleteProductFromCart,setQuantity,emptyCart} from './actions';
import cartSagas from './sagas'
import cartReducer from './reducer'
import AppBarHeader from '../../components/AppBar';

import './index.scss'

function Cart(props) { 
    const {
        fetchProductsList,
        cartReducer,
        history,
        deleteProductFromCart,
        setQuantity,
        authenticationReducer,
        emptyCart
    } = props

    const [count,setCount] = useState(1)
    const [sum,setSum] = useState(0)

    useEffect(() => {
        fetchProductsList()
    }, [])

    useEffect(() => {
        let sum = 0;
        cartReducer.products_in_cart && cartReducer.products_in_cart.map((product) => {
             sum = sum + product.discount_price
        })
        setSum(sum)
    },[cartReducer])

    const deleteProduct = (id) => {
        deleteProductFromCart(id)
    }

    const handleDecrement = (id) => {
        if(count >= 0){
            setCount(count-1)
            let products = [...cartReducer.products_in_cart]
            products.map((product) => {
                if(product._id === id){
                   return product.quantity = count-1,
                   product.discount_price = count*product.discount_price
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
                   return product.quantity = count+1,
                   product.discount_price = count*product.discount_price
                }
            })
            setQuantity(products)
    }

    const proceedToCheckout = () => {
        if(authenticationReducer.logged_in){
            emptyCart()
            history.push('/')
        }
        else{
            history.push('/login')
        }
    }

    return (
        <div className="cartContainer">
            <AppBarHeader productsData={cartReducer} history={history} authenticationReducer={authenticationReducer} />
            <div className="cartParent">
                  <Grid xs={7} className="box-shadow">
                      <div className="cartWrapper">Delivering to 2176 U/E jind</div>
                      <div className="cartWrapper">Free home delivery</div>
                      {
                          cartReducer.products_in_cart.length > 0 ? 
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
                        : <div className="noItem">No item added in cart</div>
                      }
                  </Grid>
                  <Grid xs={4} className="box-shadow orderSummary">
                      <div className="summary">
                          Order Summary
                      </div>
                      <div className="flex outer-parent">
                          <div>Total Products</div>
                          <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>{sum}</span></sub></div>
                      </div>
                      <div className="flex outer-parent">
                          <div>Shipping</div>
                          <div>FREE</div>
                      </div>
                      <div className="flex outer-parent grey-border">
                          <div>Total</div>
                          <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>{sum}</span></sub></div>
                      </div>
                      <Button
                            type='submit'
                            variant='contained'
                            className='submitButton'
                            fullWidth
                            color='primary'
                            onClick={proceedToCheckout}
                            >
                            Proceed to checkout
                       </Button>
                  </Grid>
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
    deleteProductFromCart,
    setQuantity,
    emptyCart
  };

  export {cartSagas,cartReducer}
  export default connect(stateToProps, dispatchToProps) (Cart);