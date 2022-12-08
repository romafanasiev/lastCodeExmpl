import gql from 'graphql-tag';
import { FRAGMENT_NETWORKS } from 'Api';

export const CREATE_WIFI_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  mutation CreateWifiNetwork($input: CreateWifiConfigurationInput!) {
    createWifiNetwork(input: $input) {
      ...FragmentNetworks
    }
  }
`;

export const UPDATE_WIFI_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  mutation UpdateWifiNetwork($input: UpdateWifiConfigurationInput!) {
    updateWifiNetwork(input: $input) {
      ...FragmentNetworks
    }
  }
`;

export const CREATE_FREE_WIFI_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  mutation CreateFreeWifiNetwork($input: CreateFreeWifiConfigurationInput!) {
    createFreeWifiNetwork(input: $input) {
      ...FragmentNetworks
    }
  }
`;

export const UPDATE_FREE_WIFI_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  mutation UpdateFreeWifiNetwork($input: UpdateFreeWifiConfigurationInput!) {
    updateFreeWifiNetwork(input: $input) {
      ...FragmentNetworks
    }
  }
`;

export const GET_NETWORKS = gql`
  ${FRAGMENT_NETWORKS}
  query GetNetworks($projectId: ID!) {
    networks(projectId: $projectId) {
      ...FragmentNetworks
    }
  }
`;

export const GET_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  query GetNetwork($networkId: ID!) {
    network(networkId: $networkId) {
      ...FragmentNetworks
    }
  }
`;

export const DELETE_NETWORK = gql`
  ${FRAGMENT_NETWORKS}
  mutation DeleteNetwork($networkId: ID!) {
    removeNetwork(networkId: $networkId) {
      ...FragmentNetworks
    }
  }
`;
