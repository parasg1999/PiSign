import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

import propTypes from "prop-types";
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        display: "flex",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    },
    ButtonTextWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
});

export default class RoundedButton extends Component {
    render() {
        const { backgroundColor, icon, text } = this.props;
        return (
            <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]} onPress={this.props.handlePress}>
                <View style={styles.ButtonTextWrapper}>
                    {icon}
                    <Text style={[{ color: this.props.textColor }, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
    textColor: propTypes.string,
    backgroundColor: propTypes.string
};