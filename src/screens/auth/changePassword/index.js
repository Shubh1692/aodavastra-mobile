import React,{useState} from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from '../../../components/header';
import { Formik } from 'formik';
import TextInputWithLabel from '../../../components/inputWithLabel';
import { TextInput as Input } from 'react-native-paper';
import Button from '../../../components/button';
import {changePasswordValidationSchema} from '../../../utils/formvalidation';
import MainContainer from '../../../components/mainContainer';
import FloatingButton from '../../../components/button/floatingButton';
import { ScrollView } from 'react-native-gesture-handler';



function ChangePasswordScreen() {

    const [eyeView, setEyeView] = useState(true);
    const [newPasswordeyeView, setNewPasswordeyeView] = useState(true);
    const [confirmEyeView, setConfirmEyeView] = useState(true);

    const onSubmit = (values) => {
        console.log('changePassword values', values)
    }
    return (
        <MainContainer>
            <Header />
            <View style={styles.container}>
                <Formik
                    validationSchema={changePasswordValidationSchema}
                    initialValues={{ oldPassword: '', newPassword: '', confirmNewPassword: '', }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={styles.subContainer}>
                                <ScrollView 
                                contentContainerStyle={styles.scrollContentContainer}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}>
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
                                </ScrollView>
                                <FloatingButton title={'Confirm Password'} onPress={handleSubmit}  />
                            </View>
                        )
                    }}
                </Formik>
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    container: { 
        marginTop: '8%', 
        flex: 1, 
    },
    subContainer: {
        flex: 1,
    },
    scrollContentContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 90
    },
})
export default ChangePasswordScreen;