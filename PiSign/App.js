import React from 'react';
import {
    View,
    Text
} from 'react-native';

import PinScreen from './src/screens/NewLoginScreen';
import ScanQRScreen from './src/screens/ScanQRScreen';
import LoggedInScreen from './src/screens/LoggedInScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const switchNavigator = createSwitchNavigator({
    Pin: PinScreen,
    ScanQR: ScanQRScreen,
    LoggedIn: LoggedInScreen,
    Register: RegisterScreen
}, {
    initialRouteName: 'Pin',
});

const Ap = createAppContainer(switchNavigator);

class App extends React.Component {
    render() {
        return ( 
            <Ap />
        )
    }
};

export default App;