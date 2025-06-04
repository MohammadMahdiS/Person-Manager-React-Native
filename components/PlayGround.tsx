import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PlayGround() {
    return (
        <View style={styles.container}>
            <Text style={styles.textOne}>PlayGround</Text>
            <Text style={styles.textTwo}>PlayGround</Text>
            <Text style={styles.textThree}>PlayGround</Text>
            <Text style={styles.textFour}>PlayGround</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: "row",
        // flex: 1,
        backgroundColor: "grey",
        justifyContent: "space-around",
        alignItems: "center",
    },
    textOne: {
        flex: 1,
        padding: 10,
        backgroundColor: "orange"
    },
    textTwo: {
        flex: 2,
        padding: 20,
        backgroundColor: "skyblue"
    },
    textThree: {
        flex: 3,
        padding: 30,
        backgroundColor: "violet"
    },
    textFour: {
        flex: 4,
        padding: 40,
        backgroundColor: "green"
    },

})