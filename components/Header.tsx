import { Text, View } from 'react-native'
import React from 'react'
import {styles} from '@/components/styles/GlobalState';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>مدیریت اشخاص</Text>
    </View>
  )
}
