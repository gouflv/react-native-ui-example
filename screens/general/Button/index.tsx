import React from 'react'
import { Box } from '../../../components/primitives/Box'
import { Button } from '../../../components/primitives/Button'

export const ButtonExample = () => {
  return (
    <Box>
      <Button marginBottom={20} onPress={() => console.log('onPress')}>
        Default
      </Button>
      <Button marginBottom={20} loading={true} loadingText={'Loading'}>
        Loading
      </Button>
      <Button marginBottom={20} disabled>
        Disable
      </Button>
      <Button marginBottom={20} variant={'outline'}>
        Outline
      </Button>
      <Button marginBottom={20} variant={'link'}>
        Link
      </Button>
      <Button marginBottom={20} size={'lg'}>
        Size: Lg
      </Button>
      <Button marginBottom={20} size={'md'}>
        Size: md
      </Button>
      <Button marginBottom={20} size={'sm'}>
        Size: sm
      </Button>
      <Button marginBottom={20} size={'xs'}>
        Size: xs
      </Button>
    </Box>
  )
}
