import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import NotificationButton from '../Components/NotificationButton'
import FeedbackButton from '../Components/FeedbackButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'


class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <Text>Error in LaunchScreen</Text>
    }
    return this.props.children
  }
}
//

export default class LaunchScreen extends Component {
  render () {
    return (
      <ErrorBoundary>
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.churchLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >

          </View>
          <FeedbackButton/>
          <NotificationButton/>
        </ScrollView>
      </View>
      </ErrorBoundary>
    )
  }
}
