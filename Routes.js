import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import { createStackNavigator, createAppContainer } from "react-navigation";

import FormLogin from './src/components/FormLogin';
import FormRegister from './src/components/FormRegister';
import Welcome from './src/components/Welcome'

// const Routes = () => {
//     return (
//         <Router>
//             <Scene>
//                 <Scene key='login' component={FormLogin} initial hideNavBar={true} />
//                 <Scene key='register' component={FormRegister} hideNavBar={true} />
//                 <Scene key='welcome' component={Welcome} hideNavBar={true} />
//             </Scene>
//         </Router>
//     )
// }

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: FormLogin
        },
        Register: {
            screen: FormRegister
        },
        Welcome: {
            screen: Welcome
        },
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    }
);

export default createAppContainer(AppNavigator);
