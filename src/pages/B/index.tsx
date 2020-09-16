import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goBack() {
    Taro.navigateBack()
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.goBack}>Go Back</Button>
      </View>
    )
  }
}
