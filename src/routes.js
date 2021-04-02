import React, { lazy, Suspense ,Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loader from './components/Loader';

const LoginPage = lazy(() => {
   const Structure = import('./containers/loginPage');
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
                        path="/"
                        exact
                        render={props => (
                            <Suspense fallback={<div>Loading ...</div>}>
                                <LoginPage {...props} />
                            </Suspense>
                        )}
                    />
                </Switch>
            </Fragment>
        );
    }
  }

export default Routes