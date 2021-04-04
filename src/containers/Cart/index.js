import React, {useState,useEffect } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {fetchProductsList,deleteProductFromCart,setQuantity,emptyCart} from './actions';
import cartSagas from './sagas'
import cartReducer from './reducer'
import AppBarHeader from '../../components/AppBar';
import EmptyCart from '../../components/EmptyCart';
import DeleteConfirmationModal from '../../components/DeleteConfimationModal';

import './index.scss'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

    const [sum,setSum] = useState(0)
    const [openPopup,openDeletePopup] = useState(false)
    const [idToBeDeleted,setItemIdToBeDeleted] = useState({})
    const [snackOpen, setSnackOpen] = React.useState(false);

    useEffect(() => {
        fetchProductsList()
    }, [])

    useEffect(() => {
        let sum = 0;
        cartReducer.products_in_cart && cartReducer.products_in_cart.map((product) => {
             sum = sum + (product.discount_price*product.quantity)
        })
        setSum(sum)
    },[cartReducer])

    const deleteProduct = (product) => {
        openDeletePopup(true)
        setItemIdToBeDeleted(product)
    }

    const handleDecrement = (id) => {
            let index = null
            let products = [...cartReducer.products_in_cart]
            for(let i=0; i<products.length;i++){
                if(products[i]._id === id){
                    index = i
                }
            }
            if(products[index].quantity > 1){
                products[index].quantity = products[index].quantity-1
                setQuantity(products)
            }
    }

    const handleIncrement = (id) => {
            let index = null
            let products = [...cartReducer.products_in_cart]
            for(let i=0; i<products.length;i++){
                if(products[i]._id === id){
                    index = i
                }
            }
            products[index].quantity = products[index].quantity + 1
            setQuantity(products)
    }

    const proceedToCheckout = () => {
        if(authenticationReducer.logged_in){
            emptyCart()
                history.push('/order-confirmation')
        }
        else {
            history.push('/login')
        }
    }

    const handleDeleteClose = () => {
        openDeletePopup(false)
      }
      
      const handleDeleteConfirm = () => {
        deleteProductFromCart(idToBeDeleted._id)
        openDeletePopup(false)
      }

      const handleSnackClose = (event, reason) => {
        setSnackOpen(false);
      };

    return (
        <div className="cartContainer">
              <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity={'success'}>
                        Your order successful
                    </Alert>
               </Snackbar>
            <AppBarHeader productsData={cartReducer} history={history} authenticationReducer={authenticationReducer} />
            {
                cartReducer.products_in_cart.length > 0 ?  
                 <div className="cartParent">
                  <Grid xs={7} className="box-shadow">
                      <div className="cartWrapper">Delivering to <b>2176 U/E jind</b></div>
                      <div className="cartWrapper">Free home delivery</div>
                      {
                          cartReducer.products_in_cart.map((product) => {
                            return <>
                                  <div className="cartItems flex flex-space-around">
                                  <div><img src={product.image} width={80} /></div>
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
                                      <DeleteIcon className="cursor-pointer" onClick={() => deleteProduct(product)} />
                                      <div>&#x20b9; <sub><span style={{fontSize:'20px'}}>{product.discount_price*product.quantity}</span></sub></div>
                                  </div>
                              </div>
                            </>
                        })
                      }
                      <DeleteConfirmationModal openPopup={openPopup} idToBeDeleted={idToBeDeleted} handleDeleteClose={handleDeleteClose} handleDeleteConfirm={handleDeleteConfirm} />
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
            : <EmptyCart history={history} /> 
            }
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