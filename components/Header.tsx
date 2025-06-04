import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>مدیریت اشخاص</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    padding: 25,
    backgroundColor: "goldenrod",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    

  }

})