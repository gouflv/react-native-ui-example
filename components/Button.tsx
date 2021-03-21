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
  SpaceProps
} from 'styled-system'
import { Box } from './Box'
import { Text, TextProps } from './Text'

export type ButtonProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  ShadowProps & {
    variant?: 'solid' | 'outline' | 'link' | 'ghost' | 'unStyled'
    loading?: boolean
    loadingText?: string
    spinner?: ReactElement
    disabled?: boolean
    icon?: ReactElement
    size?: 'lg' | 'md' | 'sm' | 'xs'
    _text?: TextProps
  }

const StyledButton = styled(TouchableOpacity)<
  ButtonProps & TouchableOpacityProps
>(space, color, layout, flexbox, border, shadow)

export const Button: FC<ButtonProps> = props => {
  const {
    variant,
    loading,
    loadingText,
    spinner,
    disabled,
    icon,
    size,
    _text,
    children,
    ...styledProps
  } = props
  return (
    <StyledButton {...styledProps}>
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
