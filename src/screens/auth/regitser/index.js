import React, { useState } from 'react';
import Logo from '../../../components/logo';
import { View, TouchableOpacity, ScrollView, } from 'react-native';
import Header from '../../../components/header';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import { Formik, FormikHelpers } from 'formik';
import { Text } from 'react-native-paper';
import { registerValidationSchema } from '../../../utils/formvalidation';
import Icon from '../../../components/icon';
import { TextInput as Input, Checkbox } from 'react-native-paper';
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
        navigate('nonInfluencerProfile')
    }
    return (
        <View>
            <Header />
            <ScrollView>
                <Logo />
                <Formik
                    validationSchema={registerValidationSchema}
                    initialValues={{ userName: '', email: '', password: '', confirmPassword: '' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={{ paddingHorizontal: 20 }}>
                                <View>
                                    <View>
                                        <TextInput
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
                                        <TextInput
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
                                        <TextInput
                                            placeholder="Password"
                                            returnKeyType="done"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            error={errors.password && touched.password}
                                            errorText={errors.password}
                                            secureTextEntry={eyeView}
                                            right={<Input.Icon icon={eyeView ? "eye" : 'eye-off'} onPress={() => setEyeView(!eyeView)} />}
                                        />
                                    </View>
                                    <View>
                                        <TextInput
                                            placeholder="Confirm Password"
                                            returnKeyType="done"
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                            error={errors.confirmPassword && touched.confirmPassword}
                                            errorText={errors.confirmPassword}
                                            secureTextEntry={confirmEyeView}
                                            right={<Input.Icon icon={confirmEyeView ? "eye" : 'eye-off'} onPress={() => setconfirmEyeView(!eyeView)} />}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '80%', marginVertical: 7, marginBottom: 8 }}>
                                        {/* <View style={{borderWidth:2,borderColor:theme.TextBlack ,backgroundColor:checked ? theme.Primary :theme.White,width:20,height:20 }}> */}
                                        <TouchableOpacity onPress={() => {
                                            setChecked(!checked);
                                        }} >
                                            {checked && <FastImage source={require('../../../assets/images/selectedCheck.png')} style={{ width: 20, height: 20 }} />}
                                            {!checked && <FastImage source={require('../../../assets/images/unSelected.png')} style={{ width: 20, height: 20 }} />}
                                        </TouchableOpacity>

                                        {/* <Checkbox
                                            status={checked ? 'checked' : 'unchecked'}
                                            color={theme.White}
                                            style={{height:15,width:15}}
                                            onPress={() => {
                                                setChecked(!checked);
                                            }} /> */}
                                        {/* </View> */}
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}>
                                            <Text>I accept</Text><Text style={{ color: theme.Primary, paddingHorizontal: 4, fontWeight: '600' }}>{'Terms & Conditions'}</Text><Text>and</Text><Text style={{ color: theme.Primary, paddingHorizontal: 4, fontWeight: '600' }}>Privacy Policy</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Button mode="contained" style={styles.btn} onPress={handleSubmit}>Sign up</Button>
                                </View>
                            </View>
                        )
                    }}
                </Formik>

                <Divider title={'or signup with'} />

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" textStyle={{ color: theme.TextBlack }} style={[styles.btn, { backgroundColor: '#fff' }]} onPress={() => console.log("google login")}> Continue with Google  </Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" style={[styles.btn, { backgroundColor: '#2c2c2c' }]} onPress={() => console.log("google login")}> Sign-in with Apple  </Button>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 14 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: theme.TextBlack }}>Already have an account?</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontSize: 14, }} style={styles.loginBtn} onPress={() => navigate('login')}> Log in </Button>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default RegisterScreen;