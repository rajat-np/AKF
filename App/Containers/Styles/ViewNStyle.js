import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  section:{
    paddingLeft:1,
    fontSize:20,
    fontWeight: 'bold',
    color: Colors.charcoal,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  row: {
    flex: 1,
    backgroundColor: Colors.cloud,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    padding:15
  },
  boldLabel: {
    paddingLeft:8,
    fontSize:16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.charcoal,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  label: {
    paddingLeft:8,
    fontSize:15,
    textAlign:'left',
    color: Colors.charcoal
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  notificationBanner:{
    fontSize:22, 
    fontWeight:'bold',
    color:Colors.background,
    textAlign:'center',
    marginTop:15,
    marginBottom:15
  },
  notificationView:{
    backgroundColor:Colors.facebook,
    marginBottom: Metrics.smallMargin
  }
})
