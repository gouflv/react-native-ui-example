import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { BoxExample } from './general/Box'
import { ButtonExample } from './general/Button'
import theme from '../themes'

export const Example = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <BoxExample />
        <ButtonExample />
      </SafeAreaView>
    </ThemeProvider>
  )
}
