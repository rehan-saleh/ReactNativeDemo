import React from 'react';
import { Button, StyleSheet } from 'react-native';

const NativeButton = ({ ...rest }) => {
    return (<Button {...rest} />);
}

export default NativeButton;