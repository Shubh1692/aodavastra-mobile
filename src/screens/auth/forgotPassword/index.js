import { Formik } from 'formik';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <View style={styles.container}>

            <Header />
            <Logo />
            <View style={styles.subContainer}>
                <Heading title="Forgot Your Password" textStyle={styles.forgotPasswordTitle} />
                <Text style={styles.forgotPasswordText}>
                    Enter the email you use to login to ModaVastra and we will send you a link to get you back into your account.
                </Text>
            </View>
            <Formik
                validationSchema={forgotPasswordValidationSchema}
                initialValues={{ email: '', }}
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

                            </View>

                            <View style={styles.submitButtonConatiner}>
                                <Button mode="contained" textStyle={{ lineHeight: 18, }} style={styles.submitButton} onPress={handleSubmit}> Submit </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>
        </View>

    )
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        alignItems: 'center',
    },
    forgotPasswordTitle: {
        fontSize: 16,
        color: theme.TextBlack,
        fontWeight: '600'
    },
    forgotPasswordText: {
        color: theme.textGrey,
        textAlign: 'center',
        width: '80%'
    },
    formikSubContainer: {
        paddingHorizontal: 20,
        marginTop: '6%',
        flex: 1
    },
    submitButtonConatiner: {
        alignItems: 'center',
        marginTop: '6%'
    },
    submitButton: {
        width: 200,
        height: 40,
    },
});