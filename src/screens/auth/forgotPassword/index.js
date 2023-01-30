import { Formik } from 'formik';
import React from 'react';
import { View,Text } from 'react-native';
import Button from '../../../components/button';
import Header from '../../../components/header';
import TextInputComponent from '../../../components/input';
import Logo from '../../../components/logo';
import { forgotPasswordValidationSchema } from '../../../utils/formvalidation';
import Heading from '../../../components/heading';
import theme from '../../../theme/resources';


function ForgotScreen() {
    const onSubmit = (values) => {
        const { email } = values;
        console.log('hiii values forgot', values)
    }


    return (
        <View style={{ flex: 1 }}>

            <Header />
            <Logo />
            <View style={{alignItems:'center',}}>
                <Heading title="Forgot Your Password" textStyle={{ fontSize: 16, color: theme.TextBlack, fontWeight:'600'}} />
                <Text style={{color:theme.textGrey,textAlign:'center',width:'80%'}}>
                    Enter the email you use to login to ModaVastra Admin Panel and we will send you a link to get you back into your account.
                </Text>
            </View>
            <Formik
                validationSchema={forgotPasswordValidationSchema}
                initialValues={{ email: '', }}
                onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                    return (
                        <View style={{ paddingHorizontal: 20, marginTop: '12%', flex: 1 }}>
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

                            </View>

                            <View style={{ alignItems: 'center', marginTop: '12%' }}>
                                <Button mode="contained" textStyle={{lineHeight: 18,}} style={{ width: 200, height: 40, }} onPress={handleSubmit}> Submit </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>
        </View>

    )
}

export default ForgotScreen;