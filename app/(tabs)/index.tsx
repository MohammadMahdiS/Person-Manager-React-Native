import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react'
import Header from '@/components/Header';
import Persons from '@/components/Persons';
import AddPerson from '@/components/AddPerson';
import PlayGround from '@/components/PlayGround';
// Components: Header, Persons, AddPerson, PlayGround
export default function index() {
  const [persons, setPersons] = useState([
    { name: "امیرحسین غزلی", key: "1"},
    { name: "ثریا همتی", key: "2"},
    { name: "مالک لرائایی", key: "3"},
    { name: "قباد ثراجانی", key: "4"},
    { name: "احسان یوسفی", key: "4"},
    { name: "شمشماد گلاجانی", key: "4"},
    { name: "محسن فتحی", key: "4"},
  ])

  const [person, setPerson] = useState("") 

  const pressHandler = (key) => {
    setPersons(prevPersons => prevPersons.filter(p => p.key != key))
  }


  const submitHandler = () => {
    if (person.length > 3 ) {
      setPersons( (prevPersons) => [
      ...prevPersons,
      {
        name: person,
        key: Math.floor(Math.random() * 1000).toString()
      }
    ]);
    setPerson("");
    Keyboard.dismiss();
    }else {
      Alert.alert("پیام", "بایستی بیشتر از سه کاراکتر باشد", [
        { text: "بله", onPress: () => console.log("Alert in Index is Closed")}
      ])
    }
  }

  return (
    // <PlayGround />
    <TouchableWithoutFeedback>

      <View style={styles.container}>

      {/* Header */}
      <Header />
      <View style={styles.body}>
        {/* Add Person */}
        <AddPerson 
          submitHandler = {submitHandler}
          setPerson = {setPerson}
          person = {person}
        />
        <View style={styles.items}>
          <FlatList data={persons} renderItem={({item}) => (
            <Persons person={item} pressHandler={pressHandler} />
          )} />
        </View>
      </View>



    </View>
    
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  body: {
    padding: 40,
    backgroundColor: "ghostwhite",
    flex: 1,
  },
  items: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "aliceblue"
  }
})