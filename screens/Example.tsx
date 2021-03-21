import { SafeAreaView } from 'react-native'
import React from 'react'
import { BoxExample } from './general/Box'
import { Box } from '../components/Box'

export const Example = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1}>
        <BoxExample />
      </Box>
    </SafeAreaView>
  )
}
