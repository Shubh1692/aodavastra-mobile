import React, { useState } from 'react';
import Logo from '../../../components/logo';
import { View, TouchableOpacity, ScrollView } from 'react-native';
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
import { navigate } from '../../../services/NavigationService';


function LoginScreen() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [eyeView, setEyeView] = useState(true);

    const onSubmit = (values) => {
        const { email, password } = values;
        console.log('hiii values login', values)
        navigate('nonInfluencerProfile')
    }


    return (
        <View>
            <Header />
            <ScrollView contentContainerStyle={{paddingBottom:90}} 
            showsVerticalScrollIndicator={false} 
            showsHorizontalScrollIndicator={false}
            >
                <Logo />
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={{ paddingHorizontal: 20 }}>
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
                                <View style={{ alignItems: 'center' }}>
                                    <Button mode="contained" style={{ width: 200, height: 50, }} onPress={handleSubmit}> Log in </Button>
                                </View>
                            </View>
                        )
                    }}
                </Formik>

                <Divider title={'or login with'} />

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" textStyle={{ color: theme.TextBlack }} style={{ width: 240, height: 50, backgroundColor: '#fff' }} onPress={() => console.log("google login")}> Continue with Google  </Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" style={{ width: 240, height: 50, backgroundColor: '#2c2c2c' }} onPress={() => console.log("google login")}> Sign-in with Apple  </Button>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 14 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: theme.TextBlack }}>New here?</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontSize: 14, }} style={{ width: 200, height: 50, borderWidth: 1, borderColor: theme.TextBlack }} onPress={() => navigate('register')}> Create Account </Button>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default LoginScreen;