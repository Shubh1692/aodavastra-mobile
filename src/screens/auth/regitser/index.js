import React, { useState } from 'react';
import Logo from '../../../components/logo';
import { View, TouchableOpacity, ScrollView, } from 'react-native';
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
import BottomSheet from '../../../components/bottomSheet';
import EmailIcon from '../../../assets/svg/mailSent.svg';
import CheckboxComponent from '../../../components/checkbox';




function RegisterScreen() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [eyeView, setEyeView] = useState(true);
    const [confirmEyeView, setconfirmEyeView] = useState(true);
    const [checked, setChecked] = useState(false);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

    const onSubmit = (values) => {
        const { email, password } = values;
        // navigate('Home')
        handleConfirm();
    }

    const handleConfirm = () => {
        setIsConfirmationVisible(!isConfirmationVisible);
    }
    return (
        <View>
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '80%', marginVertical: 7, marginBottom: 8 }}>
                                        {/* <View style={{borderWidth:2,borderColor:theme.TextBlack ,backgroundColor:checked ? theme.Primary :theme.White,width:20,height:20 }}> */}
                                        <CheckboxComponent checked={checked} handleCheckbox={() => {
                                            setChecked(!checked);
                                        }}/>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}>
                                            <Text>I accept</Text><Text style={{ color: theme.Primary, paddingHorizontal: 4, fontFamily: theme.Poppins.regular, fontWeight: '600' }}>{'Terms & Conditions'}</Text><Text>and</Text><Text style={{ color: theme.Primary, paddingHorizontal: 4, fontWeight: '600' }}>Privacy Policy</Text>
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
                        <Button mode="contained" textStyle={{ color: theme.TextBlack }} style={[styles.btn, { backgroundColor: theme.White }]} onPress={() => console.log("google login")}> Continue with Google  </Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" style={[styles.btn, { backgroundColor: theme.appleBackground }]} onPress={() => console.log("google login")}> Sign-in with Apple  </Button>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 14 }}>
                    <View>
                        <Text style={{ fontFamily: theme.Poppins.regular, color: theme.TextBlack }}>Already have an account?</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontFamily: theme.Poppins.regular,fontSize: 14, }} style={styles.loginBtn} onPress={() => navigate('login')}> Log in </Button>
                    </View>
                </View>
            </ScrollView>
            {isConfirmationVisible &&
                <BottomSheet bottomSheetHeigh={'55%'} title={"Email Verification"} setIsSettingIcon={setIsConfirmationVisible} actionHandler={handleConfirm} >
                    <View style={{ marginTop: '5%', flex: 1, alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <EmailIcon />
                            <View style={{ marginHorizontal: 18, marginTop: 16, marginBottom:10,alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 14 }}>We have sent you a link on <Text style={{ color: theme.Purple }}>heena@gmail.com.</Text> </Text>
                                <Text>Click on the link to verify the email.</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontSize: 14, }} style={styles.loginBtn} onPress={() => console.log("resend mail")}>Resend Link</Button>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="contained" style={styles.loginBtnStyle} onPress={() => {
                                    handleConfirm()
                                    navigate('login') 
                                    }}>Log In</Button>
                            </View>
                        </View>
                    </View>
                </BottomSheet>}
        </View>

    )
}

export default RegisterScreen;