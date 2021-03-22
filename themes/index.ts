import button from './button'

const defaults = {
  color: {
    white: '#fff',
    black: '#000',
    lightText: '#fff',
    DarkText: '#27272a',
    blue: '#3b82f6',
    green: '#22c55e',
    yellow: '#eab308',
    orange: '#f97316',
    red: '#ef4444',
    gray: '#71717a'
  },
  fonts: {
    lg: 24,
    md: 20,
    sm: 18,
    xs: 16
  },
  fontSizes: {},
  lineHeights: {},
  size: {},
  shadows: {}
}

export default {
  ...defaults,
  components: {
    button
  }
}
