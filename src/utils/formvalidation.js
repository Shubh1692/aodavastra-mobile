import * as yup from 'yup';
import {validateRequiredEmail,validateRequiredPasswordLogin} from './validators';


export const loginValidationSchema = yup.object().shape({
    email: validateRequiredEmail(),
    password: validateRequiredPasswordLogin(),
  });