import React, { useState } from 'react';
import Logo from '../../../components/logo';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';
import TextInputComponent from '../../../components/input';
import { Formik, FormikHelpers } from 'formik';
import { Text } from 'react-native-paper';
import { loginValidationSchema } from '../../../utils/formvalidation';
import styles from './styles';
import Icon from '../../../components/icon';
// import { TextInput as Input } from 'react-native-paper';
import Divider from '../../../components/divider';
import theme from '../../../theme/resources';
import IconComponent from '../../../components/icon';
import { navigate, replace } from '../../../services/NavigationService';



function LoginScreen() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [eyeView, setEyeView] = useState(true);

    const onSubmit = (values) => {
        const { email, password } = values;
        console.log('hiii values login', values)
        replace('Home')
    }


    return (
        <View>
            <Header isBack={false} />
            <ScrollView contentContainerStyle={styles.scrollContentContaine}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Logo />

                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: 'surya@mail.com', password: '12345678' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={styles.formikSubContainer}>
                                <View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="E-mail"
                                            returnKeyType="next"
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
                                        <TextInputComponent
                                            placeholder="Password"
                                            returnKeyType="done"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            error={errors.password && touched.password}
                                            errorText={errors.password}
                                            secureTextEntry={eyeView}
                                            isIcon={true}
                                            isIconToggle={eyeView}
                                            handleToggleIcon={() => setEyeView(!eyeView)}

                                        // right={<Input.Icon icon={eyeView ? "eye" : 'eye-off'} onPress={() => setEyeView(!eyeView)} />}
                                        />
                                    </View>
                                </View>
                                <View style={styles.forgotPassword}>
                                    <TouchableOpacity onPress={() => navigate('forgot')}>
                                        <Text style={styles.forgot}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.loginButtonConatiner}>
                                    <Button mode="contained" style={styles.loginButton} onPress={handleSubmit}> Log in </Button>
                                </View>
                            </View>
                        )
                    }}
                </Formik>

                <Divider title={'or login with'} />

                <View style={styles.socialContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" textStyle={{ color: theme.TextBlack }} style={{ width: 240, height: 40, backgroundColor: theme.White }} onPress={() => console.log("google login")}> Continue with Google  </Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" style={{ width: 240, height: 40, backgroundColor: theme.appleBackground }} onPress={() => console.log("google login")}> Sign-in with Apple  </Button>
                    </View>
                </View>

                <View style={styles.newHereContainer}>
                    <View>
                        <Text style={styles.newHereText}>New here?</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="outlined" textStyle={styles.createAccountText} style={styles.createAccountButton} onPress={() => navigate('register')}> Create Account </Button>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default LoginScreen;