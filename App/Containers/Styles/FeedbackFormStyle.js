import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    padding:10
  },
  text: {
    fontSize:24,
    fontWeight:'bold',
    paddingLeft:4
  },
  form: {
    margin: 1,
    height: 30,
    borderColor: '#000000',
    borderWidth: 1
  }
})
  
