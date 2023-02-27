import { Formik } from 'formik';
import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Button from '../../../components/button';
import Header from '../../../components/header';
import TextInputComponent from '../../../components/input';
import Logo from '../../../components/logo';
import { forgotPasswordValidationSchema } from '../../../utils/formvalidation';
import Heading from '../../../components/heading';
import theme from '../../../theme/resources';
import MainContainer from '../../../components/mainContainer';


function ForgotScreen() {
    const onSubmit = (values) => {
        const { email } = values;
        console.log('hiii values forgot', values)
    }


    return (
        <MainContainer>

            <Header />
            <Logo />
            <View style={styles.container}>
                <Heading title="Forgot Your Password" textStyle={styles.headingStyle} />
                <Text style={styles.textStyle}>
                    Enter the email you use to login to ModaVastra and we will send you a link to get you back into your account.
                </Text>
            </View>
            <Formik
                validationSchema={forgotPasswordValidationSchema}
                initialValues={{ email: '', }}
                onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                    return (
                        <View style={styles.subContainer}>
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

                            <View style={styles.btnContainer}>
                                <Button mode="contained" textStyle={{}} style={styles.btn} onPress={handleSubmit}> Submit </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>
        </MainContainer>

    )
}

const styles = StyleSheet.create({
    container: { 
        alignItems:'center',
    },
    headingStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 16, 
        color: theme.TextBlack, 
        fontWeight:'600'
    },
    textStyle: {
        color:theme.textGrey,
        textAlign:'center',
        width:'80%'
    },
    subContainer: {
        paddingHorizontal: 20, 
        marginTop: '6%', 
        flex: 1
    },
    scrollContentContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 90
    },
    btnContainer: {
        alignItems: 'center', 
        marginTop: '6%'
    },
    btn: {
        width: 200, 
        height: 40,
    }
})

export default ForgotScreen;