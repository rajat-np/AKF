import React, { Component } from 'react'
import { View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { ApplicationStyles, Metrics, Colors } from '../Themes'
import styles from './Styles/ViewNStyle'

const axios = require('axios');
const successData = [];
var code = 23;
const errordata = require('../Fixtures/error.json');
class ViewN extends Component {
  constructor (props) {
    super(props)
    const dataObjects = [] 
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    this.ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRowsAndSections(dataObjects)
    }
    this.getData()
  }

  renderRow (rowData, sectionID) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.art}</Text>
      </View>
    )
  }
  //
  getData = async () => {
    const faces = await this.getN()
    if(code == 200) {
    this.setState({
      dataSource: this.ds.cloneWithRowsAndSections(successData)
    })}
    else {
      this.setState({
      dataSource: this.ds.cloneWithRowsAndSections(errordata)
    })
    }
  }

// did not use Api.js instead declared a function here!!!
  getN = ()=> axios.get('https://raw.githubusercontent.com/GantMan/rn-textables/master/App/Fixtures/faces.json').
      then(function (response) {
        console.log(response.data);
        successData = response.data;
        code = response.status;
      }).catch(function(error){ //handle in case of error!!
        code = 500;
      });




  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
        return <View style={styles.sectionHeader}><Text style={styles.section}>{sectionID}</Text></View>
  }

  render () {
    return (
      <View style={styles.container}>
          <View style = {styles.notificationView}>  
            <Text style = {styles.notificationBanner}>NOTIFICATIONS</Text>
          </View>
        <ListView
          renderSectionHeader={this.renderHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewN)
