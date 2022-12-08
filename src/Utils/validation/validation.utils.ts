/* eslint-disable no-useless-escape */
/* eslint-disable func-names */
import * as yup from 'yup';
import { FormTypes } from 'Types';

const {
  email,
  firstName,
  lastName,
  password,
  confirmPass,
  confirm1,
  confirm2,
  confirm3,
  confirm4,
  projectDescription,
  projectName,
  sensorDescription,
  sensorName,
  sensorType,
  boardName,
  boardDescription,
  networkName,
  networkPassword,
  ssid,
  mac,
  deviceDescription,
  deviceName,
  boardId,
} = FormTypes;

const emailValidation = yup
  .string()
  .required('Email is required')
  .matches(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    'Incorrect email format.',
  );

const firstNameValidation = yup
  .string()
  .required('First Name is required')
  .min(2, 'Please enter minimum 2 symbols')
  .max(32, 'Maximum 32 symbols')
  .matches(/^[a-zA-Z]+$/, 'Please use only English letters');

const lastNameValidation = yup
  .string()
  .required('Last Name is required')
  .min(2, 'Please enter minimum 2 symbols')
  .max(32, 'Maximum 32 symbols')
  .matches(/^[a-zA-Z]+$/, 'Please use only English letters');

const firstNameProfileValidation = yup
  .string()
  .min(2, 'Please enter minimum 2 symbols')
  .max(32, 'Maximum 32 symbols')
  .matches(/^[a-zA-Z]+$/, 'Please use only English letters');

const lastNameProfileValidation = yup
  .string()
  .min(2, 'Please enter minimum 2 symbols')
  .max(32, 'Maximum 32 symbols')
  .matches(/^[a-zA-Z]+$/, 'Please use only English letters');

const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(8, 'Please enter minimum 8 symbols')
  .max(32, 'Maximum 32 symbols')
  .matches(
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    'Password doesn’t meet minimal requirements',
  );

const loginPasswordValidation = yup.string().required('Password is required');

const codeValidation = yup.string().required('This field is required');

const addTextField = yup.string().required('This field is required');

const addSelectField = yup.string().required('This field is required');

export const signUpValidation = yup.object().shape({
  [email]: emailValidation,
  [firstName]: firstNameValidation,
  [lastName]: lastNameValidation,
  [password]: passwordValidation,
  [confirmPass]: yup
    .string()
    .required('Confirm Password is required')
    .oneOf(
      [yup.ref(password), null],
      'The Password and Confirm Password does not matches.',
    ),
});

export const confirmCodeValidation = yup.object().shape({
  [confirm1]: codeValidation,
  [confirm2]: codeValidation,
  [confirm3]: codeValidation,
  [confirm4]: codeValidation,
});

export const signInValidation = yup.object().shape({
  [email]: emailValidation,
  [password]: loginPasswordValidation,
});

export const profileValidation = yup.object().shape({
  [firstName]: firstNameProfileValidation,
  [lastName]: lastNameProfileValidation,
});

export const changePassValidation = yup.object().shape({
  [password]: passwordValidation,
  [confirmPass]: yup
    .string()
    .required('Confirm Password is required')
    .oneOf(
      [yup.ref(password), null],
      'The Password and Confirm Password does not matches.',
    ),
});

export const addProjectValidation = yup.object().shape({
  [projectDescription]: addTextField,
  [projectName]: addTextField,
});

export const addSensorValidation = yup.object().shape({
  [sensorDescription]: addTextField,
  [sensorName]: addTextField,
  [sensorType]: addSelectField,
});

export const addBoardValidation = yup.object().shape({
  [boardName]: addTextField,
  [boardDescription]: addTextField,
});

export const addFreeWifiValidation = yup.object().shape({
  [networkName]: addTextField,
  [ssid]: addTextField,
});

export const addWifiValidation = yup.object().shape({
  [networkName]: addTextField,
  [networkPassword]: addTextField,
  [ssid]: addTextField,
});

export const addDeviceValidation = yup.object().shape({
  [boardId]: addSelectField,
  [deviceDescription]: addTextField,
  [mac]: addTextField,
  [deviceName]: addTextField,
});
