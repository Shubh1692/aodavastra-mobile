import moment from 'moment';

export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email can't be empty."
    if (!re.test(email)) return 'Ooops! We need a valid email address.'
    return ''
  }

  export const nameValidator =(name, fieldName) => {
    if (!name || !name.trim().length) return `${fieldName} can't be empty.`
    return ''
  }

  export const passwordValidator =(password) =>{
    if (!password || !password.trim().length) return "Password can't be empty."
    if (password.length < 5) return 'Password must be at least 5 characters long.'
    return ''
  }

  export const dobValidator =(dob, maxDate) =>{
    if (moment(maxDate).diff(dob, 'days') < 0) {
      return 'Age should be more then 18 years'
    }
    return ''
  }

  export const tntValidator =(tnt) =>{
    if (!tnt) {
      return 'Please accepted terms and conditions'
    }
    return ''
  }