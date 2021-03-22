import React, { FC, ReactElement } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  variant
} from 'styled-system'
import { Box } from './Box'
import { Text, TextProps } from './Text'
import { buttonStyle } from 'styled-system'
export type ButtonProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  TouchableOpacityProps & {
    variant?: 'solid' | 'outline' | 'link' | 'ghost' | 'unStyled'
    loading?: boolean
    loadingText?: string
    spinner?: ReactElement
    disabled?: boolean
    icon?: ReactElement
    size?: 'lg' | 'md' | 'sm' | 'xs'
    _text?: TextProps
  }

const StyledButton = styled(TouchableOpacity)<ButtonProps>(
  ({ theme }) => theme.components.button.base,
  variant({ scale: 'components.button.variant' }),
  variant({ prop: 'size', scale: 'components.button.size' }),
  space,
  color,
  layout,
  flexbox,
  border,
  shadow
)

export const Button: FC<ButtonProps> = props => {
  const {
    loading,
    loadingText,
    spinner,
    disabled,
    icon,
    _text,
    children,
    ...styleProps
  } = props

  return (
    <StyledButton {...styleProps}>
      <Box>
        {loading ? (
          <Box flexDirection={'row'}>
            <Text>spinner</Text>
            <Text {..._text}>{loadingText}</Text>
          </Box>
        ) : React.Children.count(children) > 1 ||
          typeof children !== 'string' ? (
          children
        ) : (
          <Text {..._text}>{children}</Text>
        )}
      </Box>
    </StyledButton>
  )
}

Button.defaultProps = { variant: 'solid', size: 'md' }
Button.displayName = 'Button'
