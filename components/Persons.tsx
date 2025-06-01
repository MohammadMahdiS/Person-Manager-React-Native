import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Persons({person, pressHandler}) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(person.key)}>
        <Text style={styles.person}>
            {person.name}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    person: {
        padding: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "orangered",
        borderRadius: 20,
        borderStyle: "dashed",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    }
})