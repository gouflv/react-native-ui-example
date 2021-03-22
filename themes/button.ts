import { CSSObject } from 'styled-components'

const variant = {
  solid: {
    color: 'white',
    backgroundColor: 'gray'
  },
  outline: {
    border: '1px solid',
    borderColor: 'black'
  },
  link: {},
  ghost: {},
  unStyled: {}
}

const size = {
  lg: {
    minWidth: 12,
    minHeight: 12,
    px: 6,
    py: 4,
    _text: {
      fontSize: 'lg'
    }
  },
  md: {
    minWidth: 10,
    minHeight: 10,
    px: 5,
    py: 3,
    _text: {
      fontSize: 'md'
    }
  },
  sm: {},
  xs: {}
}

const base: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
  // borderRadius: 'lg'
}

export default {
  base,
  variant,
  size
}
