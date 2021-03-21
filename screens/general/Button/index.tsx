import React from 'react'
import { Box } from '../../../components/Box'
import { Button } from '../../../components/Button'

export const ButtonExample = () => {
  return (
    <Box>
      <Button marginBottom={20}>Default</Button>
      <Button marginBottom={20} loading={true} loadingText={'Try Again'}>
        Loading
      </Button>
      <Button marginBottom={20} disabled>
        Disable
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
