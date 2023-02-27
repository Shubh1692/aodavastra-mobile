import React, { useState } from 'react';
import { TextInput } from '../input'
import { TextInput as Input } from 'react-native-paper';


function PasswordInput({  ...props }) {
    const [eyeView, setEyeView] = useState(true);
    // return (<TextInput
    //     placeholder="Password"
    //     returnKeyType="done"
    //     secureTextEntry={eyeView}
    //     right={<Input.Icon icon={eyeView ? "eye" : 'eye-off'} onPress={() => setEyeView(!eyeView)} />}
    //     {...props}
    // />)

    return null;
}

export default PasswordInput;