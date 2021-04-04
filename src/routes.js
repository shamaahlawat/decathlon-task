import React, { lazy, Suspense ,Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loader from './components/Loader';

const LoginPage = lazy(() => {
   const Structure = import('./containers/Authentication/LoginPage');
    return Promise.all([Structure, new Promise(resolve => setTimeout(resolve, 300))]).then(
        ([moduleExports]) => moduleExports
    );
});

const DashboardPage = lazy(() => {
    const Structure = import('./containers/DashboardPage');
     return Promise.all([Structure, new Promise(resolve => setTimeout(resolve, 300))]).then(
         ([moduleExports]) => moduleExports
     );
 });

 const Cart = lazy(() => {
    const Structure = import('./containers/Cart');
     return Promise.all([Structure, new Promise(resolve => setTimeout(resolve, 300))]).then(
         ([moduleExports]) => moduleExports
     );
 });

 const OrderConfirmation = lazy(() => {
    const Structure = import('./containers/OrderConfirmation');
     return Promise.all([Structure, new Promise(resolve => setTimeout(resolve, 300))]).then(
         ([moduleExports]) => moduleExports
     );
 });

class Routes extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
        localAuthUser: 'pending',
        }
    }
      render() {
        return (
            <Fragment>
                <Switch>
                    <Route
                        path="/login"
                        exact
                        render={props => (
                            <Suspense fallback={<div>Loading ...</div>}>
                                <LoginPage {...props} />
                            </Suspense>
                        )}
                    />
                      <Route
                        path="/"
                        exact
                        render={props => (
                            <Suspense fallback={<div>Loading ...</div>}>
                                <DashboardPage {...props} />
                            </Suspense>
                        )}
                    />
                       <Route
                        path="/cart"
                        exact
                        render={props => (
                            <Suspense fallback={<div>Loading ...</div>}>
                                <Cart {...props} />
                            </Suspense>
                        )}
                    />
                     <Route
                        path="/order-confirmation"
                        exact
                        render={props => (
                            <Suspense fallback={<div>Loading ...</div>}>
                                <OrderConfirmation {...props} />
                            </Suspense>
                        )}
                    />
                </Switch>
            </Fragment>
        );
    }
  }

export default Routes