import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Header from '@/components/Header';

export default function index() {
  const [persons, setPersons] = useState([
    { name: "امیرحسین غزلی", key: "1"},
    { name: "ثریا همتی", key: "2"},
    { name: "مالک لرائایی", key: "3"},
    { name: "قباد ثراجانی", key: "4"},
  ])

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header />
      <View style={styles.body}>
        {/* Add Person */}
        <View style={styles.items}>
          <FlatList data={persons} renderItem={({item}) => (
            <Text>{item.name}</Text>
          )} />
        </View>
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  body: {
    padding: 40,
  },
  items: {
    marginTop: 20,
  }
})