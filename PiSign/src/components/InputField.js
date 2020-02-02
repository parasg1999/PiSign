import React, { Component } from "react";

import colors from '../styles/colors';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },
    showButton: {
        position: "absolute",
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: "700"
    }
});


class InputField extends Component {
    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            customStyle,
            onChangeText,
            value
        } = this.props;

        const color = labelColor || colors.white;
        const fontSize = labelTextSize || 14;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || "transparent";

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[
                        { color: inputColor, borderBottomColor: borderBottom },
                        styles.inputField
                    ]}
                    value={value}
                    keyboardType={this.props.inputType == 'number-pad'? 'number-pad': 'default'}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                />
            </View>
        );
    }
}

export default InputField;