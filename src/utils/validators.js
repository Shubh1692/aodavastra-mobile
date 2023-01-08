import * as yup from 'yup';


export const onlyNumber = /^[0-9]*$/;
export const floatNumber = /^((\+|-)?(0|([1-9][0-9]*))(\.[0-9]+)?)$/;
export const cardsExpireMonthRegExp = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;
export const monthExp = /^(0[1-9]|1[012])$/;
export const yearExp = /^\d{4}$/;
export const expiryDateRegExp = /((0{1}[1-9]{1})|(1{1}[0-2]{1}))([2-9]{1}[0-9]{1})/;
export const nameRegExp = /^(?=.{1,60}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;
export const passwordRegExp = /^(?:(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;
export const insta = /(?:http:\/\/)?(?:www\.)?instagram\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
export const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;


export const validateRequired = (messages = { required }) =>
  yup
    .string()
    .required(messages?.required || 'Field is required')
    .max(15, "Not more than 15 character's");

export const validateInstaURL = () =>
  yup.string().matches(usernameRegex, 'invalid url').optional();

export const validateRequiredEmail = () =>
  yup
    .string()
    .trim()
    .email('Email is not valid')
    .required('Email is required');

export const validateRequiredPassword = () =>
  yup
    .string()
    .matches(noSpaceRegExp, 'Space not allowed')
    .matches(passwordRegExp, 'Should contain lowercase, uppercase and number')
    .min(8, 'Password must be 8+ characters')
    .max(15, "Password not more than 15 character's")
    .required('Password is required');

export const validateRequiredPasswordLogin = () =>
  yup
    .string()
    .required('Password is required')
    .min(3, 'Password must be 3+ characters');

export const validateName = () =>
  yup.string().matches(nameRegExp, "Invalid Name");

export const validateRequiredName = () =>
  validateName()
    .required("Name is required")
    .max(25, "Not more than 25 character's");

export const userBio = () =>{
  yup.string().max(20, "Bio not more than 200 character's").optional();
}
