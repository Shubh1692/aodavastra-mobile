import * as yup from 'yup';
import {
    validateRequiredEmail,
    validateRequiredPasswordLogin,
    validateRequiredName,
    userBio,
    validatePhone,
    validateRequiredCity,
    validateRequiredState,
    validateRequiredPincode,
    validateRequiredStreet,
    validateSnapChatUserName,
    validateFacebookUserName,
    validateInstaUserName,
    validatePanNumber,
    validateIfsc,
    validateAccountNumber,
} from './validators';

import memoize from "lodash/memoize";


export const loginValidationSchema = yup.object().shape({
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
});

export const forgotPasswordValidationSchema = yup.object().shape({
    email: validateRequiredEmail()
});

export const registerValidationSchema = yup.object().shape({
    userName: validateRequiredName(),
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match")
        .required("Password is required"),
});

export const nonInfluencerValidationSchema = yup.object().shape({
    userName: validateRequiredName(),
    bio: userBio()
})
export const addAddressValidationSchema = yup.object().shape({
    userName: validateRequiredName(),
    mobile: validatePhone(),
    pin: validateRequiredPincode(),
    state: validateRequiredState(),
    city: validateRequiredCity(),
    address1: validateRequiredStreet(),
    address2: validateRequiredStreet()
})

export const changePasswordValidationSchema = yup.object().shape({
    oldPassword: validateRequiredPasswordLogin(),
    newPassword: validateRequiredPasswordLogin(),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Password does not match")
        .required("Password is required"),
});

export const becomeCretorValidationSchema = yup.object().shape({
    userName: validateRequiredName(),
    email: validateRequiredEmail(),
    mobile: validatePhone(),
    fbUserName: validateFacebookUserName(),
    instUserName: validateInstaUserName(),
    snapUsername: validateSnapChatUserName(),
});

export const bankDetailsValidationSchema = yup.object().shape({
    accountName: validateRequiredName(),
    accountNumber: validateAccountNumber(),
    branchName: validateRequiredStreet(),
    ifsc: validateIfsc(),
    panNumber: validatePanNumber(),
});
