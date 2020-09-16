import React, { Component, useEffect } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default () =>{

  useEffect(() => {
    const page = Taro.getCurrentInstance()
    if (page.page?.onShow) {
        page.page.onShow = () => {
          console.log('in onShow')
        }
    }
    console.log('in useEffect')
  }, [])
    return (
      <View className='index'>
        <Navigator url='/pages/B/index' >Link to B</Navigator>
      </View>
    )

}
