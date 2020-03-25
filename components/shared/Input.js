import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const NativeInput = ({ ...rest }) => {
    return (
        <TextInput {...rest} style={styles.inputStyle} />
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        width: '80%'
    }
})

export default NativeInput;