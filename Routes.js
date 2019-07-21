import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import FormLogin from './src/components/FormLogin';
import FormRegister from './src/components/FormRegister';

const Routes = () => {
    return (
        <Router>
            <Scene>
                <Scene key='login' component={FormLogin} initial hideNavBar={true} />
                <Scene key='register' component={FormRegister} hideNavBar={true} />
            </Scene>
        </Router>
    )
}

export default Routes