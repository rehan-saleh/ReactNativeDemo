import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = ({ visible }) => {
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator style={styles.activityIndicatorStyle}
                animating={visible} color="red" size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
    }
})

export default Loader;