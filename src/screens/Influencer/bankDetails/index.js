import React,{useState} from 'react';
import { View, Text,TouchableOpacity,ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import Container from '../../../components/container';
import Heading from '../../../components/heading';
import { Formik, FormikHelpers } from 'formik';
import TextInputComponent from '../../../components/input';
import { bankDetailsValidationSchema } from '../../../utils/formvalidation';
import FooterButton from '../../../components/footerButton';
import { deviceWidth } from '../../../utils/device';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import MainContainer from '../../../components/mainContainer';



function BankDeatils() {
    const [checked, setChecked] = useState(false);
    const onSubmit = (values) => {
        const { email, password } = values;
        // navigate('nonInfluencerProfile')
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
                    <Heading title={'Bank Details'} />
                    <Formik
                        validationSchema={bankDetailsValidationSchema}
                        initialValues={{ accountName: '', accountNumber: '', branchName: '',ifsc:'',panNumber:'', }}
                        onSubmit={onSubmit}>
                        {({ handleSubmit, isValid, dirty, errors, touched, handleChange, handleBlur, values }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                     <ScrollView 
                                     showsHorizontalScrollIndicator={false} 
                                     showsVerticalScrollIndicator={false}
                                     contentContainerStyle={{paddingBottom:90}}>
                                    <View>
                                        <TextInputComponent
                                            placeholder="Account Holder Name"
                                            returnKeyType="next"
                                            onChangeText={handleChange('accountName')}
                                            onBlur={handleBlur('accountName')}
                                            value={values.accountName}
                                            error={errors.accountName && touched.accountName}
                                            errorText={errors.accountName}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                        />
                                    </View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="Account Number"
                                            returnKeyType="next"
                                            onChangeText={handleChange('accountNumber')}
                                            onBlur={handleBlur('accountNumber')}
                                            value={values.accountNumber}
                                            error={errors.accountNumber && touched.accountNumber}
                                            errorText={errors.accountNumber}
                                            autoCapitalize="none"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="IFSC Code"
                                            returnKeyType="next"
                                            onChangeText={handleChange('ifsc')}
                                            onBlur={handleBlur('ifsc')}
                                            error={errors.ifsc && touched.ifsc}
                                            errorText={errors.ifsc}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                        />
                                    </View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="Branch Address"
                                            returnKeyType="next"
                                            onChangeText={handleChange('branchName')}
                                            onBlur={handleBlur('branchName')}
                                            error={errors.branchName && touched.branchName}
                                            errorText={errors.branchName}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                        />
                                    </View>
                                    <View>
                                        <TextInputComponent
                                            placeholder="PAN Card Number"
                                            returnKeyType="next"
                                            onChangeText={handleChange('panNumber')}
                                            onBlur={handleBlur('panNumber')}
                                            error={errors.panNumber && touched.panNumber}
                                            errorText={errors.panNumber}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                        />
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

export default BankDeatils;
