import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from '@/components/styles/GlobalState';

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
