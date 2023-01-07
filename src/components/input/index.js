import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper';
import theme from '../../theme/resources';

export default function TextInput({ errorText, description,mode, ...props}) {
    return (
      <View style={styles.container}>
        <Input
        theme={{ roundness: 4 }} 
          style={styles.input}
          selectionColor={theme.TextBlack}
          underlineColor="transparent"
          mode={mode? mode: "outlined"}
          placeholder={props.label}
          {...props}
        />
        {description && !errorText ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 4,
    //   borderWidth:4
    },
    input: {
      backgroundColor: theme.White,
      padding:0
    },
    description: {
      fontSize: 11,
      color: theme.TextBlack,
      paddingTop: 8,
    },
    error: {
      fontSize: 11,
      color: theme.Red,
      paddingTop: 8,
    },
  })