import gql from 'graphql-tag';
import { FRAGMENT_SENSOR } from 'Api';

export const CREATE_SENSOR = gql`
  ${FRAGMENT_SENSOR}
  mutation CreateSensor($input: CreateSensorInput!) {
    createSensor(input: $input) {
      ...FragmentSensor
    }
  }
`;

export const UPDATE_SENSOR = gql`
  ${FRAGMENT_SENSOR}
  mutation UpdateSensor($input: UpdateSensorInput!) {
    updateSensor(input: $input) {
      ...FragmentSensor
    }
  }
`;

export const DELETE_SENSOR = gql`
  ${FRAGMENT_SENSOR}
  mutation DeleteSensor($id: ID!) {
    removeSensor(id: $id)
  }
`;

export const GET_SENSORS = gql`
  ${FRAGMENT_SENSOR}
  query GetSensors($projectId: ID!) {
    sensors(projectId: $projectId) {
      ...FragmentSensor
    }
  }
`;

export const GET_SENSOR = gql`
  ${FRAGMENT_SENSOR}
  query GetSensor($id: ID!) {
    sensor(id: $id) {
      ...FragmentSensor
    }
  }
`;
