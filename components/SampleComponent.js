import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from './shared/Index'

class SampleComponent extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Input placeholder="Write something here..." />
                    <Button title="Add" />
                </View>

                <View style={styles.colorBoxesContainer}>
                    <View style={styles.flexContainer, { backgroundColor: 'red' }}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.flexContainer, { backgroundColor: 'blue' }}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.flexContainer, { backgroundColor: 'green' }}>
                        <Text>3</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    formContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    colorBoxesContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        width: '100%'
    },
    flexContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SampleComponent;