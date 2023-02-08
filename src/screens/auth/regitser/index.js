import React, { useState } from 'react';
import Logo from '../../../components/logo';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';
import TextInputComponent from '../../../components/input';
import { Formik, FormikHelpers } from 'formik';
import { Text } from 'react-native-paper';
import { registerValidationSchema } from '../../../utils/formvalidation';
import Icon from '../../../components/icon';
// import { TextInput as Input, Checkbox } from 'react-native-paper';
import Divider from '../../../components/divider';
import theme from '../../../theme/resources';
import IconComponent from '../../../components/icon';
import styles from './styles';
import { navigate } from '../../../services/NavigationService';
import FastImage from 'react-native-fast-image';




function RegisterScreen() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [eyeView, setEyeView] = useState(true);
    const [confirmEyeView, setconfirmEyeView] = useState(true);
    const [checked, setChecked] = React.useState(false);

    const onSubmit = (values) => {
        const { email, password } = values;
        navigate('Home')
    }
    return (
        <View>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContentContaine}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Logo />
                <Formik
                    validationSchema={registerValidationSchema}
                    initialValues={{ userName: '', email: '', password: '', confirmPassword: '' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={styles.formikSubContainer}>
                                <View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="Full Name"
                                            returnKeyType="next"
                                            onChangeText={handleChange('userName')}
                                            onBlur={handleBlur('userName')}
                                            value={values.userName}
                                            error={errors.userName && touched.userName}
                                            errorText={errors.userName}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                        />
                                    </View>
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
                                    <View>
                                        <TextInputComponent
                                            placeholder="Confirm Password"
                                            returnKeyType="done"
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                            error={errors.confirmPassword && touched.confirmPassword}
                                            errorText={errors.confirmPassword}
                                            secureTextEntry={confirmEyeView}
                                            isIcon={true}
                                            isIconToggle={confirmEyeView}
                                            handleToggleIcon={() => setconfirmEyeView(!confirmEyeView)}
                                        // right={<Input.Icon icon={confirmEyeView ? "eye" : 'eye-off'} onPress={() => setconfirmEyeView(!eyeView)} />}
                                        />
                                    </View>
                                    <View style={styles.checkBoxContainer}>
                                        {/* <View style={{borderWidth:2,borderColor:theme.TextBlack ,backgroundColor:checked ? theme.Primary :theme.White,width:20,height:20 }}> */}
                                        <TouchableOpacity onPress={() => {
                                            setChecked(!checked);
                                        }} >
                                            {checked && <FastImage source={require('../../../assets/images/selectedCheck.png')} style={styles.checkBox} />}
                                            {!checked && <FastImage source={require('../../../assets/images/unSelected.png')} style={styles.checkBox} />}
                                        </TouchableOpacity>
                                        <View style={styles.tcppContainer}>
                                            <Text>I accept</Text><Text style={styles.tcppText}>{'Terms & Conditions'}</Text><Text>and</Text><Text style={styles.tcppText}>Privacy Policy</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.signupContainer}>
                                    <Button mode="contained" style={styles.btn} onPress={handleSubmit}>Sign up</Button>
                                </View>
                            </View>
                        )
                    }}
                </Formik>

                <Divider title={'or signup with'} />

                <View style={styles.socialContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" textStyle={{ color: theme.TextBlack }} style={[styles.btn, { backgroundColor: theme.White }]} onPress={() => console.log("google login")}> Continue with Google  </Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" style={[styles.btn, { backgroundColor: theme.appleBackground }]} onPress={() => console.log("google login")}> Sign-in with Apple  </Button>
                    </View>
                </View>

                <View style={styles.alreadyHaveContainer}>
                    <View>
                        <Text style={styles.alreadyHaveText}>Already have an account?</Text>
                    </View>
                    <View style={styles.signupContainer}>
                        <Button mode="outlined" textStyle={styles.loginText} style={styles.loginBtn} onPress={() => navigate('login')}> Log in </Button>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default RegisterScreen;