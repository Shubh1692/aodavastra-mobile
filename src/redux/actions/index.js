import React from 'react';
import {IS_LOADING,IS_LOGIN_LOADING} from '../constant';

export function isLoading(isLoading = false) {
    return {
      type: IS_LOADING,
      isLoading: isLoading,
    };
  }
  export function isAuthLoading(isLoading = false) {
    return {
      type: IS_LOGIN_LOADING,
      isLoading: isLoading,
    };
  }