import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import theme from '../../theme/resources';

export default function FooterButton({ mode, style, textStyle, ...props }) {
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
    position: 'absolute',
    bottom: 0,
    // height:50,
    // marginVertical: 10,
    // paddingVertical: 2,
    borderRadius: 0,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: theme.White
  },
})
