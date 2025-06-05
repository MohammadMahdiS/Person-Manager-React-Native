import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';
export default function Persons({ person, pressHandler, completeHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => completeHandler(person.key)}>
        <View style={styles.person}>
          <MaterialIcons name="delete" size= {18}  color= "orange"
           onPress={() => pressHandler(person.key)} />
          <Text style={[
            styles.personName, person.completed 
            ? {textDecorationLine: "line-through"} 
            : {textDecorationLine : "none"} ]} >
            {person.name}
          </Text>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personName: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  }
})