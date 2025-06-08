import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header';
import Persons from '@/components/Persons';
import AddPerson from '@/components/AddPerson';
import PlayGround from '@/components/PlayGround';
import * as Font from 'expo-font';

// Components: Header, Persons, AddPerson, PlayGround


// Fonts

const getFonts = () => {
  return Font.loadAsync({
    // "iran-yekan" : require('@/assets/fonts/iran-yekan/iranyekanwebregularfanum.woff'),
    "byekan": require("@/assets/fonts/b-yekan/BYekan.ttf"),
    "spacemono": require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
};

// Apps
export default function index() {
  const [persons, setPersons] = useState([
    { name: "امیرحسین غزلی", key: "1", completed: false },
    { name: "ثریا همتی", key: "2", completed: false },
    { name: "مالک لرائایی", key: "3", completed: false },
    { name: "قباد ثراجانی", key: "4", completed: false },
    { name: "احسان یوسفی", key: "5", completed: false },
    { name: "شمشماد گلاجانی", key: "6", completed: false },
    { name: "محسن فتحی", key: "7", completed: false },
  ])

  const [person, setPerson] = useState("")
  const [fontLoading, setFontLoading] = useState(false)

  const pressHandler = (key) => {
    setPersons(prevPersons => prevPersons.filter((p) => p.key != key))
  }

  const completeHandler = (key) => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex((p) => p.key == key);
    const person = allPersons[personIndex];
    person.completed = !person.completed;
    allPersons[personIndex] = person;

    setPerson(allPersons);
  }

  const submitHandler = () => {
    if (person.length > 3) {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          name: person,
          key: Math.floor(Math.random() * 1000).toString(),
          completed: false,
        }
      ]);
      setPerson("");
      Keyboard.dismiss();
    } else {
      Alert.alert("پیام", "بایستی بیشتر از سه کاراکتر باشد", [
        { text: "بله", onPress: () => console.log("Alert in Index is Closed") }
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
              submitHandler={submitHandler}
              setPerson={setPerson}
              person={person}
            />
            <View style={styles.items}>
              <FlatList data={persons} renderItem={({ item }) => (
                <Persons person={item} pressHandler={pressHandler} completeHandler={completeHandler} />
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