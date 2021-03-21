import React, { FC } from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'
import styled from 'styled-components/native'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textShadow,
  typography,
  TypographyProps
} from 'styled-system'

export type TextProps = NativeTextProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps

const StyledText = styled(NativeText)(
  color,
  space,
  color,
  typography,
  layout,
  textShadow
)

export const Text: FC<TextProps> = props => (
  <StyledText {...props}>{props.children}</StyledText>
)
