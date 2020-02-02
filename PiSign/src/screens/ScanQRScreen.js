import React from 'react';
import { View, Text } from 'react-native';
const EthCrypto = require("eth-crypto");
import QRCodeScanner from 'react-native-qrcode-scanner';
import '../../shim';
import axios from 'axios';

export default class ScanQRScreen extends React.Component {

    _onSuccess = (e) => {
        console.log(e);
        if (e.data.includes('pisign')) {
            let website = e.data.split('/')[1];
            let ip = e.data.split('/')[2];
            console.log(website);
            const signerIdentity = EthCrypto.createIdentity();

            const message = EthCrypto.hash.keccak256([
                { type: "string", value: website }
            ]);

            const signature = EthCrypto.sign(signerIdentity.privateKey, message);

            console.log(`message: ${message}`);
            console.log(`signature: ${signature}`);
            console.log(`signer public key: ${signerIdentity.address}`);

            axios.post('http://localhost:4000/login', {
                ip,
                website
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    this.props.navigation.navigate('LoggedIn', {
                        website
                    })
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <View>
                <QRCodeScanner
                    onRead={this._onSuccess}
                />
            </View>
        )
    }
}