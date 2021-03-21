import React, { FC } from 'react'
import { Text as _Text, TextProps as _TextProps } from 'react-native'
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

export type TextProps = _TextProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps

const StyledText = styled(_Text)(
  color,
  space,
  color,
  typography,
  layout,
  textShadow
)

export const Text: FC<TextProps> = props => (
  <StyledText {...props}>${props.children}</StyledText>
)
