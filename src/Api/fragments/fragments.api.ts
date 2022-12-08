import gql from 'graphql-tag';

export const FRAGMENT_USER = gql`
  fragment FragmentUser on User {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
`;

export const FRAGMENT_PROJECT = gql`
  ${FRAGMENT_USER}
  fragment FragmentProject on Project {
    id
    name
    description
    createdAt
    updatedAt
    owner {
      ...FragmentUser
    }
  }
`;

export const FRAGMENT_CODE = gql`
  fragment FragmentUserCode on UserCode {
    code
    createdAt
    id
    type
    updatedAt
  }
`;

export const FRAGMENT_NETWORKS = gql`
  fragment FragmentNetworks on Network {
    id
    name
    createdAt
    updatedAt
    config {
      type
      ... on FreeWifiConfiguration {
        ssid
      }
      ... on WifiConfiguration {
        ssid
        password
      }
    }
  }
`;

export const FRAGMENT_BOARD_CONFIG = gql`
  ${FRAGMENT_NETWORKS}
  fragment FragmentBoardConfig on BoardConfig {
    id
    createdAt
    updatedAt
    networks {
      ...FragmentNetworks
    }
  }
`;

export const FRAGMENT_SENSOR = gql`
  fragment FragmentSensor on Sensor {
    id
    name
    description
    type
    createdAt
    updatedAt
  }
`;

export const FRAGMENT_BOARD = gql`
  ${FRAGMENT_PROJECT}
  ${FRAGMENT_BOARD_CONFIG}
  ${FRAGMENT_SENSOR}
  fragment FragmentBoard on Board {
    id
    createdAt
    name
    description
    updatedAt
    createdBy {
      ...FragmentUser
    }
    project {
      ...FragmentProject
    }
    configuration {
      ...FragmentBoardConfig
    }
    sensors {
      ...FragmentSensor
    }
  }
`;

export const FRAGMENT_DEVICE = gql`
  ${FRAGMENT_BOARD}
  fragment FragmentDevice on Device {
    id
    name
    description
    createdAt
    updatedAt
    board {
      ...FragmentBoard
    }
  }
`;
