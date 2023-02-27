
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ImageBackground, ScrollView } from 'react-native';
import Header from '../../../components/header';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Button from '../../../components/button';
import TextInputWithLabel from '../../../components/inputWithLabel';
import TextInputComponent from '../../../components/input';
import { Formik } from 'formik';
import { nonInfluencerValidationSchema } from '../../../utils/formvalidation';
import FooterButton from '../../../components/footerButton';
import { deviceWidth } from '../../../utils/device';
import styles from './styles';
import { navigate } from '../../../services/NavigationService';
import UserCoverImage from '../../../assets/images/backgroundImage.png';
import Heading from '../../../components/heading';
import MainContainer from '../../../components/mainContainer';



function InfluencerEditProfileScreen() {
    const [height, setHeight] = useState(undefined)

    const onSubmit = (values) => {
        const { username, bio } = values;
        console.log("values", values)
    }
    return (
        <MainContainer style={{ flex: 1 }}>
            <Header isLogout={true} />

            <Formik
                validationSchema={nonInfluencerValidationSchema}
                initialValues={{ userName: 'Anjali Verma', bio: '' }}
                enableReinitialize
                onSubmit={onSubmit}
                style={{borderWidth:4}}>
                {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values, }) => {
                    return (
                        <View style={{flex:1}}>
                            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:90}}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                                <ImageBackground source={UserCoverImage} style={{ width: deviceWidth, height: 165, position: 'relative' }}>
                                   
                                </ImageBackground>
                                <View style={[styles.profileContainer, { alignItems: 'flex-start' }]}>
                                    <View style={styles.profileView}>
                                        <ProfileImage size={88} />
                                    </View>
                                    <View style={styles.btnSection}>
                                        <Button mode="outlined" textStyle={styles.btnText} style={styles.btn} onPress={() => console.log('hii')}> Change Picture </Button>
                                    </View>
                                </View>
                                <View style={{ marginTop: '8%', flex: 1, }}>

                                    <View style={{ flex: 1 }}>
                                        <View style={{ paddingHorizontal: 20, flex: 1 }}>
                                            <View>
                                                <TextInputWithLabel
                                                    title="Name"
                                                    placeholder="Name"
                                                    returnKeyType="next"
                                                    value={values.userName}
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
                                                    inputStyle={{ textAlignVertical: 'top', height: 120, paddingTop: 10 }}
                                                    returnKeyType="next"
                                                    onChangeText={handleChange('bio')}
                                                    onBlur={handleBlur('bio')}
                                                    value={values.bio}
                                                    error={errors.bio && touched.bio}
                                                    errorText={errors.bio}
                                                />
                                            </View>
                                            <View style={{ marginTop: '2%' }}>
                                                <Heading title={'Social Links'} />
                                                <View>
                                                    <TextInputComponent
                                                        placeholder="Instagram profile link"
                                                        returnKeyType="next"
                                                        maxLength={10}
                                                        onChangeText={handleChange('instUserName')}
                                                        onBlur={handleBlur('instUserName')}
                                                        error={errors.instUserName && touched.instUserName}
                                                        errorText={errors.instUserName}
                                                        isInstSocailIcon={true}
                                                        autoCapitalize="none"
                                                    />
                                                </View>
                                                <View>
                                                    <TextInputComponent
                                                        placeholder="Facebook profile link"
                                                        returnKeyType="next"
                                                        maxLength={10}
                                                        onChangeText={handleChange('fbUserName')}
                                                        onBlur={handleBlur('fbUserName')}
                                                        error={errors.fbUserName && touched.fbUserName}
                                                        errorText={errors.fbUserName}
                                                        isFbSocailIcon={true}
                                                        autoCapitalize="none"

                                                    />
                                                </View>
                                                <View>
                                                    <TextInputComponent
                                                        placeholder="Snapchat profile link"
                                                        returnKeyType="next"
                                                        maxLength={10}
                                                        onChangeText={handleChange('snapUsername')}
                                                        onBlur={handleBlur('snapUsername')}
                                                        error={errors.snapUsername && touched.snapUsername}
                                                        errorText={errors.snapUsername}
                                                        isSnapSocailIcon={true}
                                                        autoCapitalize="none"

                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.forgotPassword}>
                                                <TouchableOpacity onPress={() => navigate('changePassword')}>
                                                    <Text style={styles.forgot}>Change Password</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </ScrollView>
                            <FooterButton mode="contained" style={{ width: deviceWidth, height: 50, }} onPress={handleSubmit}>Save Changes</FooterButton>
                        </View>)
                }}

            </Formik>
        </MainContainer>
    )
}

export default InfluencerEditProfileScreen;