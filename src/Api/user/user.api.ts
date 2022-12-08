import axios from 'axios';
import gql from 'graphql-tag';
import { FRAGMENT_CODE, FRAGMENT_USER } from 'Api/fragments';

export const CREATE_USER = gql`
  ${FRAGMENT_USER}
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...FragmentUser
    }
  }
`;

export const VERIFY_USER = gql`
  ${FRAGMENT_USER}
  mutation verifyUser($input: VerifyUserInput!) {
    verifyUser(input: $input) {
      ...FragmentUser
    }
  }
`;

export const GET_USER_ME = gql`
  ${FRAGMENT_USER}
  query getUserInfo {
    me {
      ...FragmentUser
    }
  }
`;

export const GET_USER_DATA = gql`
  ${FRAGMENT_USER}
  query getUserData($id: ID!) {
    user(id: $id) {
      ...FragmentUser
    }
  }
`;

export const RESEND_VERIFY_CODE = gql`
  ${FRAGMENT_CODE}
  query getUserCode($id: ID!) {
    userCode(id: $id) {
      ...FragmentUserCode
    }
  }
`;

export const UPDATE_USER = gql`
  ${FRAGMENT_USER}
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      ...FragmentUser
    }
  }
`;

export const login = async (email: string, pass: string): Promise<string> => {
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT!}auth/login`, {
      username: email,
      password: pass,
    })
    .then((response) => response.data.access_token);
};
