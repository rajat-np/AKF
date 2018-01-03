import React, { Component } from 'react'
import { ScrollView, Text, View, TextInput } from 'react-native'
import SubmitButton from '../../App/Components/SubmitButton'


import styles from './Styles/FeedbackFormStyle'

export default class FeedbackForm extends Component {
  render () {
    return (
      <View style = {styles.container}>
        <View style = {{padding:5,paddingBottom:30}}>
          <TextInput style = {styles.form} 
            underlineColorAndroid = "transparent"
            placeholder = "Name"
            placeholderTextColor = "#CCCCCC"
            />
        </View>
        <View style = {{padding:5,paddingBottom:30}}>
          <TextInput style = {styles.form} 
            underlineColorAndroid = "transparent"
            placeholder = "Message"
            placeholderTextColor = "#CCCCCC"
            />
        </View>

        <SubmitButton/>
      </View>
    )
  }
}