import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import { Formik } from 'formik';
import TextInputWithLabel from '../../../components/inputWithLabel';
import { TextInput as Input } from 'react-native-paper';
import Button from '../../../components/button';
import { changePasswordValidationSchema } from '../../../utils/formvalidation';



function ChangePasswordScreen() {

    const [eyeView, setEyeView] = useState(true);
    const [newPasswordeyeView, setNewPasswordeyeView] = useState(true);
    const [confirmEyeView, setConfirmEyeView] = useState(true);

    const onSubmit = (values) => {
        console.log('changePassword values', values)
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subContainer}>
                <Formik
                    validationSchema={changePasswordValidationSchema}
                    initialValues={{ oldPassword: '', newPassword: '', confirmNewPassword: '', }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.formikSubContainer}>
                                    <View>
                                        <TextInputWithLabel
                                            title="Current Password"
                                            placeholder="Current Password"
                                            returnKeyType="next"
                                            onChangeText={handleChange('oldPassword')}
                                            onBlur={handleBlur('oldPassword')}
                                            error={errors.oldPassword && touched.oldPassword}
                                            errorText={errors.oldPassword}
                                            autoCapitalize="none"
                                            secureTextEntry={eyeView}
                                            isIcon={true}
                                            isIconToggle={eyeView}
                                            handleToggleIcon={() => setEyeView(!eyeView)}
                                        // right={<Input.Icon icon={eyeView ? "eye" : 'eye-off'} onPress={() => setEyeView(!eyeView)} />}
                                        />
                                    </View>
                                    <View>
                                        <TextInputWithLabel
                                            title="New Password"
                                            placeholder="New Password"
                                            returnKeyType="next"
                                            onChangeText={handleChange('newPassword')}
                                            onBlur={handleBlur('newPassword')}
                                            error={errors.newPassword && touched.newPassword}
                                            errorText={errors.newPassword}
                                            autoCapitalize="none"
                                            secureTextEntry={newPasswordeyeView}
                                            isIcon={true}
                                            isIconToggle={newPasswordeyeView}
                                            handleToggleIcon={() => setNewPasswordeyeView(!newPasswordeyeView)}
                                        // right={<Input.Icon icon={newPasswordeyeView ? "eye" : 'eye-off'} onPress={() => setNewPasswordeyeView(!eyeView)} />}
                                        />
                                    </View>
                                    <View>
                                        <TextInputWithLabel
                                            title="Confirm Password"
                                            placeholder="Confirm Password"
                                            returnKeyType="next"
                                            onChangeText={handleChange('confirmNewPassword')}
                                            onBlur={handleBlur('confirmNewPassword')}
                                            error={errors.confirmNewPassword && touched.confirmNewPassword}
                                            errorText={errors.confirmNewPassword}
                                            autoCapitalize="none"
                                            secureTextEntry={confirmEyeView}
                                            isIcon={true}
                                            isIconToggle={confirmEyeView}
                                            handleToggleIcon={() => setConfirmEyeView(!confirmEyeView)}
                                        // right={<Input.Icon icon={confirmEyeView ? "eye" : 'eye-off'} onPress={() => setConfirmEyeView(!confirmEyeView)} />}
                                        />
                                    </View>
                                </View>
                                <View style={styles.confirmButtonConatiner}>
                                    <Button mode="contained" style={styles.confirmButton} onPress={handleSubmit}> Confirm Password </Button>
                                </View>
                            </View>
                        )
                    }}
                </Formik>
            </View>
        </View>
    )
}

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        marginTop: '8%',
        flex: 1
    },
    formikSubContainer: {
        paddingHorizontal: 20,
    },
    confirmButtonConatiner: {
        alignItems: 'center',
        width: '100%',
        bottom: 40,
        position: 'absolute'
    },
    confirmButton: {
        width: 200,
        height: 40,
    },
});