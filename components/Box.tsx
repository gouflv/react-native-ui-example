import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
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
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system'
import { Text, TextProps } from './Text'

export type BoxProps = ViewProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  ShadowProps & {
    center?: boolean
    _text?: TextProps
  }

const StyledBox = styled(View)<BoxProps>(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  shadow
)

export const Box: FC<BoxProps> = props => {
  return (
    <StyledBox
      {...props}
      alignItems={props.center ? 'center' : 'stretch'}
      justifyContent={props.center ? 'center' : 'flex-start'}
    >
      {React.Children.map(props.children, child =>
        typeof child === 'string' ? (
          <Text {...props._text}>{child}</Text>
        ) : (
          child
        )
      )}
    </StyledBox>
  )
}
