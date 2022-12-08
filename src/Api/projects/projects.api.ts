import gql from 'graphql-tag';
import { FRAGMENT_PROJECT } from 'Api/fragments';

export const GET_PROJECTS = gql`
  ${FRAGMENT_PROJECT}
  query GetProjects {
    projects {
      ...FragmentProject
    }
  }
`;

export const GET_PROJECT = gql`
  ${FRAGMENT_PROJECT}
  query GetProject($id: ID!) {
    project(id: $id) {
      ...FragmentProject
    }
  }
`;

export const CREATE_PROJECT = gql`
  ${FRAGMENT_PROJECT}
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      ...FragmentProject
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    removeProject(id: $id)
  }
`;

export const UPDATE_PROJECT = gql`
  ${FRAGMENT_PROJECT}
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
      ...FragmentProject
    }
  }
`;
