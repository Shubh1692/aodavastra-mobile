import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import Container from '../../../components/container';
import Heading from '../../../components/heading';
import { Formik, FormikHelpers } from 'formik';
import TextInputComponent from '../../../components/input';
import { becomeCretorValidationSchema } from '../../../utils/formvalidation';
import FooterButton from '../../../components/footerButton';
import { deviceWidth } from '../../../utils/device';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import MainContainer from '../../../components/mainContainer';
import {navigate} from '../../../services/NavigationService';



function BecomeInfluencerProfile() {
    const [checked, setChecked] = useState(false);
    const onSubmit = (values) => {
        // const { email, password } = values;
        navigate('influencerMyAccount')
    }

    return (
        <MainContainer>
            <Header />
            <Container >
                {/* Header heading */}
                <View style={styles.headingSection}>
                    <Text style={styles.topTitle}> Hi Anjali!
                        <Text style={styles.midTitle}>
                            {''}  Fill the following Information to become a
                        </Text>
                        <Text style={styles.lastTitle}> {''}Modavastra Creator</Text>
                    </Text>
                </View>
                <View style={styles.formSection}>
                    <Heading title={'Profile Details'} />
                    <Formik
                        validationSchema={becomeCretorValidationSchema}
                        initialValues={{ userName: '', email: '', mobile: '', fbUserName: '', instUserName: '', snapUsername: '' }}
                        onSubmit={onSubmit}>
                        {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <ScrollView
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        contentContainerStyle={{ paddingBottom: 90 }}>
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
                                                placeholder="Mobile"
                                                returnKeyType="next"
                                                maxLength={10}
                                                onChangeText={handleChange('mobile')}
                                                onBlur={handleBlur('mobile')}
                                                error={errors.mobile && touched.mobile}
                                                errorText={errors.mobile}
                                                autoCapitalize="none"
                                                keyboardType="number-pad"
                                            />
                                        </View>
                                        <View style={{ marginTop: '2%' }}>
                                            <Heading title={'Social Links'} />
                                            <View>
                                                <TextInputComponent
                                                    placeholder="Instagram profile link"
                                                    returnKeyType="next"
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
                                                    onChangeText={handleChange('snapUsername')}
                                                    onBlur={handleBlur('snapUsername')}
                                                    error={errors.snapUsername && touched.snapUsername}
                                                    errorText={errors.snapUsername}
                                                    isSnapSocailIcon={true}
                                                    autoCapitalize="none"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.checkSection}>
                                            <TouchableOpacity onPress={() => {
                                                setChecked(!checked);
                                            }}>
                                                {checked && <FastImage source={require('../../../assets/images/selectedCheck.png')} style={styles.checkImg} />}
                                                {!checked && <FastImage source={require('../../../assets/images/unSelected.png')} style={styles.checkImg} />}
                                            </TouchableOpacity>
                                            <View style={styles.checkTitleSection}>
                                                <Text>I accept</Text><Text style={styles.termTitle}>{'Terms & Conditions'}</Text><Text>and</Text><Text style={styles.termTitle}>Privacy Policy</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                    <FooterButton mode="contained" style={styles.footerBtn} onPress={handleSubmit}>Submit Form</FooterButton>
                                </View>
                            )
                        }}
                    </Formik>
                </View>

            </Container>
        </MainContainer>
    )
}

export default BecomeInfluencerProfile;
