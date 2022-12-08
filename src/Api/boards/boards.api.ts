import gql from 'graphql-tag';
import { FRAGMENT_BOARD } from 'Api';

export const CREATE_BOARD = gql`
  ${FRAGMENT_BOARD}
  mutation CreateBoard($input: CreateBoardInput!) {
    createBoard(input: $input) {
      ...FragmentBoard
    }
  }
`;

export const UPDATE_BOARD = gql`
  ${FRAGMENT_BOARD}
  mutation UpdateBoard($input: UpdateBoardInput!) {
    updateBoard(input: $input) {
      ...FragmentBoard
    }
  }
`;

export const UPDATE_BOARD_CONFIG = gql`
  mutation UpdateBoardConfig($input: UpdateBoardConfigInput!) {
    updateBoardConfig(input: $input)
  }
`;

export const DELETE_BOARD = gql`
  mutation DeleteBoard($id: ID!) {
    removeBoard(id: $id)
  }
`;

export const GET_BOARD = gql`
  ${FRAGMENT_BOARD}
  query GetBoard($id: ID!) {
    board(id: $id) {
      ...FragmentBoard
    }
  }
`;

export const GET_BOARDS = gql`
  ${FRAGMENT_BOARD}
  query GetBoards($projectId: ID!) {
    boards(projectId: $projectId) {
      ...FragmentBoard
    }
  }
`;
