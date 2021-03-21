import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxExample } from './general/Box'
import { ButtonExample } from './general/Button'

export const Example = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BoxExample />
      <ButtonExample />
    </SafeAreaView>
  )
}
