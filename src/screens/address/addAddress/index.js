import React, { useState } from 'react';
import { ScrollView, View,Text } from 'react-native';
import TextInputWithLabel from '../../../components/inputWithLabel';
import { Formik } from 'formik';
import FooterButton from '../../../components/footerButton';
import Header from '../../../components/header';
import { deviceWidth } from '../../../utils/device';
import { addAddressValidationSchema } from '../../../utils/formvalidation';
import MainContainer from '../../../components/mainContainer';
import CheckboxComponent from '../../../components/checkbox';
import theme from '../../../theme/resources';


function AddAddressScreen() {
    const [checked, setChecked] = useState(false);
    const onSubmit = (values) => {
        // const { username, bio } = values;
        console.log("values", values)
    }
    return (
        <MainContainer style={{ flex: 1 }}>
            <Header />

            <View style={{ marginTop: '8%', flex: 1 }}>
                <Formik
                    validationSchema={addAddressValidationSchema}
                    initialValues={{ userName: '', mobile: '', pin: '', state: '', city: '', address1: '', address2: '' }}
                    onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                        return (
                            <View style={{ flex: 1 }}>
                                <View style={{ paddingHorizontal: 20, }}>
                                    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}>
                                        <View>
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
                                            {/* Mobile */}
                                            <View>
                                                <TextInputWithLabel
                                                    title="Mobile"
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
                                        </View>
                                        <View style={{ marginTop: '8%' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                {/* Pin */}
                                                <View style={{ width: '48%' }}>
                                                    <TextInputWithLabel
                                                        title="Pin"
                                                        placeholder="Pin"
                                                        maxLength={6}
                                                        returnKeyType="next"
                                                        onChangeText={handleChange('pin')}
                                                        onBlur={handleBlur('pin')}
                                                        error={errors.pin && touched.pin}
                                                        errorText={errors.pin}
                                                        autoCapitalize="none"
                                                        keyboardType="number-pad"
                                                    />
                                                </View>
                                                {/* State */}
                                                <View style={{ width: '48%' }}>
                                                    <TextInputWithLabel
                                                        title="State"
                                                        placeholder="State"
                                                        returnKeyType="next"
                                                        onChangeText={handleChange('state')}
                                                        onBlur={handleBlur('state')}
                                                        error={errors.state && touched.state}
                                                        errorText={errors.state}
                                                        autoCapitalize="none"
                                                        keyboardType="default"
                                                    />
                                                </View>
                                            </View>
                                            {/* Address line 1 */}
                                            <View>
                                                <TextInputWithLabel
                                                    title="Address line 1"
                                                    placeholder="Address line 1"
                                                    returnKeyType="next"
                                                    onChangeText={handleChange('address1')}
                                                    onBlur={handleBlur('address1')}
                                                    error={errors.address1 && touched.address1}
                                                    errorText={errors.address1}
                                                    autoCapitalize="none"
                                                    keyboardType="default"
                                                />
                                            </View>
                                            {/* Address line 2 */}
                                            <View>
                                                <TextInputWithLabel
                                                    title="Address line 2"
                                                    placeholder="Address line 2"
                                                    returnKeyType="next"
                                                    onChangeText={handleChange('address2')}
                                                    onBlur={handleBlur('address2')}
                                                    error={errors.address2 && touched.address2}
                                                    errorText={errors.address2}
                                                    autoCapitalize="none"
                                                    keyboardType="default"
                                                />
                                            </View>
                                            <View>
                                                <TextInputWithLabel
                                                    title="City/District"
                                                    placeholder="City/District"
                                                    returnKeyType="next"
                                                    onChangeText={handleChange('city')}
                                                    onBlur={handleBlur('city')}
                                                    error={errors.city && touched.city}
                                                    errorText={errors.city}
                                                    autoCapitalize="none"
                                                    keyboardType="default"
                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row', paddingHorizontal:11,alignItems: 'center', borderRadius:4,width: '100%', backgroundColor:theme.background,height:50,marginVertical: 7, marginBottom: 8 }}>
                                                <CheckboxComponent checked={checked} handleCheckbox={() => {
                                                    setChecked(!checked);
                                                }} />
                                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 15 }}>
                                                <Text style={{color:theme.TextBlack,fontSize:14}}>Make this my default address.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                                <FooterButton mode="contained" style={{ width: deviceWidth, height: 50, }} onPress={handleSubmit}>Save Changes</FooterButton>
                            </View>
                        )
                    }}
                </Formik>
            </View>

        </MainContainer>
    )
}

export default AddAddressScreen;