import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native'
// import { TextInput as Input } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import theme from '../../theme/resources';
import styles from './styles';

export default function TextInputWithLabel({ onBlur, isIcon,handleToggleIcon,isIconToggle,title, inputStyle, textStyle, errorText, description, mode, ...props }) {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.titleStyle, textStyle]}>{title}</Text>
            </View>
            <TextInput
                theme={{ roundness: 4 }}
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
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}