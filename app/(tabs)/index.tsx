import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Header from '@/components/Header';
import Persons from '@/components/Persons';

export default function index() {
  const [persons, setPersons] = useState([
    { name: "امیرحسین غزلی", key: "1"},
    { name: "ثریا همتی", key: "2"},
    { name: "مالک لرائایی", key: "3"},
    { name: "قباد ثراجانی", key: "4"},
  ])

  const pressHandler = (key) => {
    setPersons(prevPersons => prevPersons.filter(p => p.key != key))
  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header />
      <View style={styles.body}>
        {/* Add Person */}
        <View style={styles.items}>
          <FlatList data={persons} renderItem={({item}) => (
            <Persons person={item} pressHandler={pressHandler} />
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