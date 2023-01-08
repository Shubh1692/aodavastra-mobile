import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../../components/header';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Button from '../../../components/button';
import TextInputWithLabel from '../../../components/inputWithLabel';
import { Formik } from 'formik';
import { nonInfluencerValidationSchema } from '../../../utils/formvalidation';
import FooterButton from '../../../components/footerButton';
import { deviceWidth } from '../../../utils/device';
import styles from './styles';



function NonInfluencerEditProfileScreen() {
    const [height, setHeight] = useState(undefined)

    const onSubmit = (values) => {
        const { username, bio } = values;
        console.log("values", values)
    }
    return (
        <View style={{ flex: 1 }}>
            <Header isLogout={true} />

            <View style={styles.profileContainer}>
                <ProfileImage />
                <View style={styles.btnSection}>
                    <Button mode="outlined" textStyle={styles.btnText} style={styles.btn} onPress={() => console.log('hii')}> Change Picture </Button>
                </View>
            </View>
            <View style={{ marginTop: '8%',  flex: 1 }}>
                <Formik
                    validationSchema={nonInfluencerValidationSchema}
                    initialValues={{ userName: '', bio: '' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={{ flex: 1 }}>
                                <View style={{ paddingHorizontal: 20, }}>
                                    <View>
                                        <TextInputWithLabel
                                            title="Name"
                                            placeholder="Name"
                                            returnKeyType="next"
                                            onChangeText={handleChange('userName')}
                                            onBlur={handleBlur('userName')}
                                            error={errors.userName && touched.userName}
                                            errorText={errors.userName}
                                            autoCapitalize="none"
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInputWithLabel
                                            title="Bio"
                                            placeholder="bio"
                                            multiline={true}
                                            numberOfLines={4}
                                            placeholderStyle={{ borderWidth: 1, borderColor: 'red', textAlignVertical: 'top', }}
                                            inputStyle={{ height: 120, textAlignVertical: 'top', }}
                                            returnKeyType="next"
                                            onChangeText={handleChange('bio')}
                                            onBlur={handleBlur('bio')}
                                            value={values.bio}
                                            error={errors.bio && touched.bio}
                                            errorText={errors.bio}
                                        />
                                    </View>
                                </View>
                                <FooterButton mode="contained" style={{ width: deviceWidth, height: 50, }} onPress={handleSubmit}>Save Changes</FooterButton>
                            </View>
                        )
                    }}

                </Formik>
            </View>


        </View>
    )
}

export default NonInfluencerEditProfileScreen;