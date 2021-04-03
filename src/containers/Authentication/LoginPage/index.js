import React, { useEffect,Fragment,useState } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import InputItem from '../../../components/InputItem'
import {loginUser} from '../actions';

import decathlon from '../../../assets/decathlon.png';
import './index.scss';

function LoginPage(props) {
    const {
        history,
        loginUser,
        authenticationReducer
    } = props;

    const [email,setEmail] = useState('')
    const [password,setPassord] = useState('')

    useEffect(() => {
       if(authenticationReducer.logged_in){
          history.push('/')
       }
    },[authenticationReducer])

    const handleInputChange = (event) => {
        if(event.target.name === 'email'){
            setEmail(event.target.value)
        }
        else{
            setPassord(event.target.value)
        }
    }

    const onSubmitUserDetails = () => {
        const payload = {
            email:email,
            password:password
        }
        loginUser(payload)
    }
 
    return (
        <div className="LoginContainer">
        <Grid xs={7} className="firstGrid">
            <div className="heading">Welcome to DECATHLON</div>
        </Grid>
          <Grid xs={5} className="secondGrid">
              <img alt="not found" src={decathlon} height={100} />
              <div className="container">
                <Fragment>
                        <InputItem
                        label='Email'
                        placeholder='Enter your email'
                        name='email'
                        // value={values.email}
                        onChange={handleInputChange}
                        />
                        <InputItem
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        name='password'
                        // value={values.password}
                        onChange={handleInputChange}
                        />
                        <Button
                        type='submit'
                        variant='contained'
                        className='submitButton'
                        fullWidth
                        onClick={onSubmitUserDetails}
                        >
                        Login
                        </Button>
                    </Fragment>
              </div>
          </Grid>
      </div>
    );
}

const stateToProps = (state) => {
    const authenticationReducer = state.authenticationReducer;
  
    return {
        authenticationReducer,
    };
  };

const dispatchToProps = {
    loginUser
};

export default connect(stateToProps, dispatchToProps) (LoginPage);