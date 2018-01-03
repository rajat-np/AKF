import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import FeedbackForm from '../../App/Containers/FeedbackForm'

export default class FeedbackButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Message/Complaint
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <FeedbackForm screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View/>
    }
  }
}