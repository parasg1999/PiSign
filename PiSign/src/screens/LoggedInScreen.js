import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import colors from "../styles/colors";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: "flex",
        marginTop: 30,
        padding: 20
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    },
    facebookIcon: {
        color: colors.green01,
        position: "relative",
        left: 20,
        zIndex: 8
 },
});

export default class LoggedOut extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar backgroundColor={colors.green01} barStyle="light-content" />
                <View style={styles.welcomeWrapper}>
                    <Text style={styles.welcomeText}>
                        Welcome to {this.props.navigation.getParam('website')}.
                    </Text>
                    <Text style={styles.welcomeText, {fontSize: 20}}>
                        You are now Logged In
                        </Text>
                </View>
            </View>
        );
    }
}