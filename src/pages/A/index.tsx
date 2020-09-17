import React, { Component, useEffect } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
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

  useDidShow(() => {
    console.log('in useDidShow')
  })

    return (
      <View className='index'>
        <Navigator url='/pages/B/index' >Link to B</Navigator>
      </View>
    )
}
