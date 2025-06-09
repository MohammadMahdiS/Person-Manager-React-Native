import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'
import {styles} from '@/components/styles/GlobalState';

export default function AddPerson({submitHandler, setPerson, person}) {
  return (
    <View>
      <TextInput
       style={styles.input}
       placeholder="اسم جدید..."
       placeholderTextColor="darkgrey"
       onChangeText= {setPerson}
       value = {person}
       >    
         
      </TextInput>
      <Button 
        onPress ={submitHandler}
        title = "اضافه شخص جدید"
        color= "orange" />
    </View>
  )
}
