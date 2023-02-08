import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import theme from '../../theme/resources';

export default function Button({ mode, style, textStyle, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        style,
      ]}
      labelStyle={[styles.text, textStyle]}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 5,
    height: 40,
  },
  text: {
    textTransform: 'none',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: theme.White
  },
})
