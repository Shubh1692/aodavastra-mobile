import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper';
import theme from '../../theme/resources';
import styles from './styles';

export default function TextInputWithLabel({ title,inputStyle ,textStyle ,errorText, description, mode, ...props }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.titleStyle,textStyle]}>{title}</Text>
            </View>
            <Input
                theme={{ roundness: 4 }}
                style={[styles.input,inputStyle]}
                selectionColor={theme.TextBlack}
                underlineColor="transparent"
                mode={mode ? mode : "outlined"}
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