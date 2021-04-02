import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import InputItem from '../../../components/InputItem'
import Form from '../../../components/Form'

import decathlon from '../../../assets/decathlon.png';
import './index.scss';

function LoginPage(props) {
    const {
        history
    } = props;
 
    return (
        <div className="LoginContainer">
        <Grid xs={7} className="firstGrid">
            <div className="heading">Welcome to DECATHLON</div>
        </Grid>
          <Grid xs={5} className="secondGrid">
              <img alt="not found" src={decathlon} height={100} />
              <div className="container">
                <Fragment>
                    <Form>
                        <InputItem
                        label='Email'
                        placeholder='Enter your email'
                        name='email'
                        // value={values.email}
                        // onChange={handleInputChange}
                        // error={errors.email}
                        />
                        <InputItem
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        name='password'
                        // value={values.password}
                        // onChange={handleInputChange}
                        // error={errors.password}
                        />
                        <Button
                        type='submit'
                        variant='contained'
                        className='submitButton'
                        fullWidth
                        >
                        Login
                        </Button>
                    </Form>
                    </Fragment>
              </div>
          </Grid>
      </div>
    );
}

export default LoginPage;