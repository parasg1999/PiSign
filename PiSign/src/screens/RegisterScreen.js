import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar, KeyboardAvoidingView } from "react-native";
import axios from 'axios';

import colors from "../styles/colors";
import InputField from "../components/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";

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
        name: '',
        password: '',
        password2: '',
    }

    handleNameChange = name => {
        this.setState({ name });
    };

    handlePasswordChange = password => {
        this.setState({ password: password });
    };
    
    handlePassword2Change = password => {
        this.setState({ password2: password });
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
        if(this.state.password2 === this.state.password && this.state.password != '') {
            this.props.navigation.navigate('Pin', {
                pin: this.state.password
            });
        } else {
            this.setState({password: '', password2: ''})
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} >
                <StatusBar backgroundColor={colors.green01} barStyle="light-content" />
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.avoidView}>
                        <Text style={styles.loginHeader}>Register</Text>
                        <InputField
                            labelText="NAME"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="name"
                            value={this.state.name}
                            onChangeText={this.handleNameChange}
                            customStyle={{ marginBottom: 30 }}
                        />
                        <InputField
                            labelText="PIN"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="number-pad"
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange}
                            customStyle={{ marginBottom: 30 }}
                        />
                        <InputField
                            labelText="REENTER PIN"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="number-pad"
                            value={this.state.password2}
                            onChangeText={this.handlePassword2Change}
                            customStyle={{ marginBottom: 30 }}
                        />
                    </ScrollView>
                </View>
                <NextArrowButton handleLogin={this._Login} />
            </KeyboardAvoidingView>
        );
    }
}
