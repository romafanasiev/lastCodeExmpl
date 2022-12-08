import gql from 'graphql-tag';
import { FRAGMENT_DEVICE } from 'Api';

export const CREATE_DEVICE = gql`
  ${FRAGMENT_DEVICE}
  mutation CreateDevice($input: CreateDeviceInput!) {
    createDevice(input: $input) {
      ...FragmentDevice
    }
  }
`;

export const UPDATE_DEVICE = gql`
  ${FRAGMENT_DEVICE}
  mutation UpdateDevice($input: UpdateDeviceInput!) {
    updateDevice(input: $input) {
      ...FragmentDevice
    }
  }
`;

export const GET_DEVICES = gql`
  ${FRAGMENT_DEVICE}
  query GetDevices($projectId: ID!) {
    devices(projectId: $projectId) {
      ...FragmentDevice
    }
  }
`;

export const GET_DEVICE = gql`
  ${FRAGMENT_DEVICE}
  query GetDevice($id: ID!) {
    device(id: $id) {
      ...FragmentDevice
    }
  }
`;

export const DELETE_DEVICE = gql`
  ${FRAGMENT_DEVICE}
  mutation DeleteDevice($id: ID!) {
    removeDevice(id: $id)
  }
`;
