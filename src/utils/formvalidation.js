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
    validateRequiredStreet
} from './validators';

import memoize from "lodash/memoize";


export const loginValidationSchema = yup.object().shape({
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
});

export const forgotPasswordValidationSchema=  yup.object().shape({
    email: validateRequiredEmail()
});

export const registerValidationSchema = yup.object().shape({
    userName:validateRequiredName(),
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("Password is required"),
});

export const nonInfluencerValidationSchema = yup.object().shape({
    userName:validateRequiredName(),
    bio:userBio()
})
export const addAddressValidationSchema = yup.object().shape({
    userName:validateRequiredName(),
    mobile:validatePhone(),
    pin:validateRequiredPincode(),
    state:validateRequiredState(),
    city:validateRequiredCity(),
    address1:validateRequiredStreet(),
    address2:validateRequiredStreet()
})

