import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

import Routes from './Routes'
import reducers from './src/reducers'
import NavigationService from './src/services/NavigationService';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBCUNH_7kVT5_AX46XgH6H_KSRLCupqSao",
      
      authDomain: "whatsapp-clone-eb5d3.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-eb5d3.firebaseio.com",
      projectId: "whatsapp-clone-eb5d3",
      storageBucket: "whatsapp-clone-eb5d3.appspot.com",
      messagingSenderId: "454054480792",
      appId: "1:454054480792:web:b72acb3642a013e0"
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
};

export default App;
