import { Formik } from 'formik';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Button from '../../../components/button';
import Header from '../../../components/header';
import TextInput from '../../../components/input';
import Logo from '../../../components/logo';
import { forgotPasswordValidationSchema } from '../../../utils/formvalidation';


function ForgotScreen() {
    const onSubmit = (values) => {
        const { email } = values;
        console.log('hiii values forgot', values)
    }


    return (
        <View style={{flex:1}}>

            <Header />
            <Logo />
            <Formik
                validationSchema={forgotPasswordValidationSchema}
                initialValues={{ email: '', }}
                onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                    return (
                        <View style={{ paddingHorizontal: 20,marginTop:'12%',flex:1 }}>
                            <View>
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

                            </View>

                            <View style={{ alignItems: 'center', marginTop:'12%' }}>
                                <Button mode="contained" style={{ width: 200, height: 50, }} onPress={handleSubmit}> Submit </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>
        </View>

    )
}

export default ForgotScreen;