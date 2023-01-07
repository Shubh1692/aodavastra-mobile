import React, { useState } from 'react';
import Logo from '../../components/logo';
import { View } from 'react-native';
import Header from '../../components/header';
import Button from '../../components/button';
import TextInput from '../../components/input';
import { Formik, FormikHelpers } from 'formik';
import {loginValidationSchema} from '../../utils/formvalidation';



function LoginScreen() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onSubmit = (values) =>{
        const { email, password } = values;
    }

    return (
        <View>
            <Header />
            <Logo />

            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty,errors,touched,handleChange,handleBlur,values }) => {
                    return (
                        <View style={{ paddingHorizontal: 20 }}>
                            <View>
                                <View>
                                    <TextInput
                                        placeholder="E-mail"
                                        returnKeyType="next"
                                        value={email.value}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        errorText={errors.email}
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="Password"
                                        returnKeyType="done"
                                        value={password.value}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        error={errors.password && touched.password}
                                        errorText={errors.password}
                                        secureTextEntry
                                    // right={<Icon name="eye" color="black"/>}
                                    />
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="contained" style={{ width: 200, height: 50, }} onPress={handleSubmit}> Log in </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>

        </View>

    )
}

export default LoginScreen;