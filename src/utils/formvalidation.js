import * as yup from 'yup';
import {
    validateRequiredEmail,
    validateRequiredPasswordLogin,
    validateRequiredName,
    userBio
} from './validators';

import memoize from "lodash/memoize";


export const loginValidationSchema = yup.object().shape({
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
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