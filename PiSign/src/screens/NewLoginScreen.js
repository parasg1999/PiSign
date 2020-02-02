import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar, KeyboardAvoidingView } from "react-native";
import axios from 'axios';

import colors from "../styles/colors";
import InputField from "../components/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import RoundedButton from "../components/buttons/RoundedButton";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    loginHeader: {
        fontSize: 28,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    }
});

export default class Login extends Component {
    state = {
        password: ''
    }

    handlePasswordChange = password => {
        this.setState({ password: password });
    };

    _Login = async () => {
        // const url = 'http://13.235.43.83:1248/auth/login';
        // axios.post(url, {
        //     email: this.state.email,
        //     password: this.state.password
        // }, {
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     }
        // })
        //     .then(res => console.log(res.status))
        //     .catch(err => console.log(err));
        if(this.state.password == '1234' || this.state.password == this.props.navigation.getParam('pin')) {
            this.props.navigation.navigate('ScanQR');
        } else {
            this.setState({password: ''})
        }
    }

    _Register = () => {
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} >
                <StatusBar backgroundColor={colors.green01} barStyle="light-content" />
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.avoidView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <InputField
                            labelText="PIN"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="num-pad"
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange}
                            customStyle={{ marginBottom: 30 }}
                        />
                        <Text style={styles.loginHeader}>OR</Text>
                        <RoundedButton text="Register" textColor="white" handlePress={this._Register}></RoundedButton>
                    </ScrollView>
                </View>
                <NextArrowButton handleLogin={this._Login} />
            </KeyboardAvoidingView>
        );
    }
}
