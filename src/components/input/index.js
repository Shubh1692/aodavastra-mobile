import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, } from 'react-native'
import FastImage from 'react-native-fast-image';
// import { TextInput as Input } from 'react-native-paper';
import theme from '../../theme/resources';
import styles from './styles';


export default function TextInputComponent({ handleToggleIcon,isIconToggle, onBlur,inputStyle, errorText, description, mode, isIcon,isInstSocailIcon,isFbSocailIcon, isSnapSocailIcon,...props }) {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setIsFocus(true)}
        style={[styles.input, inputStyle, { borderColor: isFocus ? theme.Primary : theme.TextBlack }]}
        selectionColor={theme.TextBlack}
        onBlur={() => {
          onBlur,
            setIsFocus(false)
        }}
        underlineColor="transparent"
        placeholderTextColor={theme.gray}
        mode={mode ? mode : "outlined"}
        placeholder={props.label}
        {...props}
      />
      {isIcon &&
        <TouchableOpacity onPress={handleToggleIcon} style={styles.iconContainer}>
          {isIconToggle && <FastImage source={require('../../assets/images/eye.png')} style={styles.toggleIconStyle} resizeMode="contain" />}
          {!isIconToggle && <FastImage source={require('../../assets/images/eyeOff.png')} style={styles.toggleIconStyle} resizeMode="contain" />}
        </TouchableOpacity>
      }
      {isFbSocailIcon &&
        <View style={styles.iconContainer}>
           <FastImage source={require('../../assets/images/Facebook.png')} style={styles.iconStyle} resizeMode="contain" />
        </View>
      }
      {isInstSocailIcon &&
        <View style={styles.iconContainer}>
           <FastImage source={require('../../assets/images/instgram.png')} style={styles.iconStyle} resizeMode="contain" />
        </View>
      }
      {isSnapSocailIcon &&
        <View style={styles.iconContainer}>
           <FastImage source={require('../../assets/images/Snapchat.png')} style={styles.iconStyle} resizeMode="contain" />
        </View>
      }
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}