import { Text } from 'react-native'
import React from 'react'
import { Box } from '../../../components/Box'

export const BoxExample = () => {
  return (
    <Box flex={1}>
      <Box
        marginBottom={20}
        height={200}
        backgroundColor={'#5fd634'}
        _text={{ fontSize: 20 }}
        center
      >
        Block Box
      </Box>
      <Box
        marginBottom={20}
        width={1 / 2}
        height={200}
        backgroundColor={'#e02e2e'}
        _text={{ color: '#fff', fontSize: 20 }}
        center
      >
        Half Width Box
      </Box>
    </Box>
  )
}
