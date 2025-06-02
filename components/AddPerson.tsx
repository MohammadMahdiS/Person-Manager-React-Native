import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontSize: 15,

    }
})