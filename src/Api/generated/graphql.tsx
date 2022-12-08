import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Board = {
  __typename?: 'Board';
  configuration: BoardConfig;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  sensors: Array<Sensor>;
  updatedAt: Scalars['DateTime'];
};

export type BoardConfig = {
  __typename?: 'BoardConfig';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  networks: Array<Network>;
  updatedAt: Scalars['DateTime'];
};

export type CreateBoardInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['String'];
  sensorIds: Array<Scalars['ID']>;
};

export type CreateDeviceInput = {
  boardId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  mac: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type CreateFreeWifiConfigurationInput = {
  name: Scalars['String'];
  projectId: Scalars['ID'];
  ssid: Scalars['String'];
};

export type CreateProjectInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateSensorInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['ID'];
  type: SensorType;
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateWifiConfigurationInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  projectId: Scalars['ID'];
  ssid: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  board: Board;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  mac: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FreeWifiConfiguration = NetworkConfiguration & {
  __typename?: 'FreeWifiConfiguration';
  ssid: Scalars['String'];
  type: NetworkType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createDevice: Device;
  createFreeWifiNetwork: Network;
  createProject: Project;
  createSensor: Sensor;
  createUser: User;
  createWifiNetwork: Network;
  removeBoard: Scalars['Boolean'];
  removeDevice: Scalars['Boolean'];
  removeNetwork: Network;
  removeProject: Scalars['Boolean'];
  removeSensor: Scalars['Boolean'];
  updateBoard: Board;
  updateBoardConfig: Scalars['Boolean'];
  updateDevice: Device;
  updateFreeWifiNetwork: Network;
  updateProject: Project;
  updateSensor: Sensor;
  updateUser: User;
  updateWifiNetwork: Network;
  verifyUser: User;
};


export type MutationCreateBoardArgs = {
  input: CreateBoardInput;
};


export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};


export type MutationCreateFreeWifiNetworkArgs = {
  input: CreateFreeWifiConfigurationInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSensorArgs = {
  input: CreateSensorInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWifiNetworkArgs = {
  input: CreateWifiConfigurationInput;
};


export type MutationRemoveBoardArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveDeviceArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveNetworkArgs = {
  networkId: Scalars['ID'];
};


export type MutationRemoveProjectArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveSensorArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBoardArgs = {
  input: UpdateBoardInput;
};


export type MutationUpdateBoardConfigArgs = {
  input: UpdateBoardConfigInput;
};


export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput;
};


export type MutationUpdateFreeWifiNetworkArgs = {
  input: UpdateFreeWifiConfigurationInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateSensorArgs = {
  input: UpdateSensorInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateWifiNetworkArgs = {
  input: UpdateWifiConfigurationInput;
};


export type MutationVerifyUserArgs = {
  input: VerifyUserInput;
};

export type Network = {
  __typename?: 'Network';
  config: NetworkConfiguration;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NetworkConfiguration = {
  type: NetworkType;
};

export enum NetworkType {
  FreeWiFi = 'FreeWiFi',
  WiFi = 'WiFi'
}

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  board: Board;
  boards: Array<Board>;
  device: Device;
  devices: Array<Device>;
  me: User;
  network: Network;
  networks: Array<Network>;
  project: Project;
  projects: Array<Project>;
  sensor: Sensor;
  sensors: Array<Sensor>;
  user: User;
  userCode: UserCode;
  users: Array<User>;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
};


export type QueryBoardsArgs = {
  projectId: Scalars['ID'];
};


export type QueryDeviceArgs = {
  id: Scalars['ID'];
};


export type QueryDevicesArgs = {
  projectId: Scalars['ID'];
};


export type QueryNetworkArgs = {
  networkId: Scalars['ID'];
};


export type QueryNetworksArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySensorArgs = {
  id: Scalars['ID'];
};


export type QuerySensorsArgs = {
  projectId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserCodeArgs = {
  id: Scalars['ID'];
};

export type Sensor = {
  __typename?: 'Sensor';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  type: SensorType;
  updatedAt: Scalars['DateTime'];
};

export enum SensorType {
  Humidity = 'Humidity',
  Raw = 'Raw',
  Temperature = 'Temperature'
}

export type UpdateBoardConfigInput = {
  id: Scalars['ID'];
  networkIds: Array<Scalars['ID']>;
};

export type UpdateBoardInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  sensorIds: Array<Scalars['ID']>;
};

export type UpdateDeviceInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFreeWifiConfigurationInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSensorInput = {
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateWifiConfigurationInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isVerify: Scalars['Boolean'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCode = {
  __typename?: 'UserCode';
  code: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VerifyUserInput = {
  code: Scalars['Float'];
  userId: Scalars['String'];
};

export type WifiConfiguration = NetworkConfiguration & {
  __typename?: 'WifiConfiguration';
  password: Scalars['String'];
  ssid: Scalars['String'];
  type: NetworkType;
};

export type CreateBoardMutationVariables = Exact<{
  input: CreateBoardInput;
}>;


export type CreateBoardMutation = { __typename?: 'Mutation', createBoard: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } };

export type UpdateBoardMutationVariables = Exact<{
  input: UpdateBoardInput;
}>;


export type UpdateBoardMutation = { __typename?: 'Mutation', updateBoard: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } };

export type UpdateBoardConfigMutationVariables = Exact<{
  input: UpdateBoardConfigInput;
}>;


export type UpdateBoardConfigMutation = { __typename?: 'Mutation', updateBoardConfig: boolean };

export type DeleteBoardMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBoardMutation = { __typename?: 'Mutation', removeBoard: boolean };

export type GetBoardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBoardQuery = { __typename?: 'Query', board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } };

export type GetBoardsQueryVariables = Exact<{
  projectId: Scalars['ID'];
}>;


export type GetBoardsQuery = { __typename?: 'Query', boards: Array<{ __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> }> };

export type CreateDeviceMutationVariables = Exact<{
  input: CreateDeviceInput;
}>;


export type CreateDeviceMutation = { __typename?: 'Mutation', createDevice: { __typename?: 'Device', id: string, name: string, description: string, createdAt: any, updatedAt: any, board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } } };

export type UpdateDeviceMutationVariables = Exact<{
  input: UpdateDeviceInput;
}>;


export type UpdateDeviceMutation = { __typename?: 'Mutation', updateDevice: { __typename?: 'Device', id: string, name: string, description: string, createdAt: any, updatedAt: any, board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } } };

export type GetDevicesQueryVariables = Exact<{
  projectId: Scalars['ID'];
}>;


export type GetDevicesQuery = { __typename?: 'Query', devices: Array<{ __typename?: 'Device', id: string, name: string, description: string, createdAt: any, updatedAt: any, board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } }> };

export type GetDeviceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDeviceQuery = { __typename?: 'Query', device: { __typename?: 'Device', id: string, name: string, description: string, createdAt: any, updatedAt: any, board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } } };

export type DeleteDeviceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDeviceMutation = { __typename?: 'Mutation', removeDevice: boolean };

export type FragmentUserFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any };

export type FragmentProjectFragment = { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type FragmentUserCodeFragment = { __typename?: 'UserCode', code: number, createdAt: any, id: string, type: string, updatedAt: any };

export type FragmentNetworksFragment = { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } };

export type FragmentBoardConfigFragment = { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> };

export type FragmentSensorFragment = { __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any };

export type FragmentBoardFragment = { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> };

export type FragmentDeviceFragment = { __typename?: 'Device', id: string, name: string, description: string, createdAt: any, updatedAt: any, board: { __typename?: 'Board', id: string, createdAt: any, name: string, description: string, updatedAt: any, createdBy: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }, project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }, configuration: { __typename?: 'BoardConfig', id: string, createdAt: any, updatedAt: any, networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> }, sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> } };

export type CreateWifiNetworkMutationVariables = Exact<{
  input: CreateWifiConfigurationInput;
}>;


export type CreateWifiNetworkMutation = { __typename?: 'Mutation', createWifiNetwork: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type UpdateWifiNetworkMutationVariables = Exact<{
  input: UpdateWifiConfigurationInput;
}>;


export type UpdateWifiNetworkMutation = { __typename?: 'Mutation', updateWifiNetwork: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type CreateFreeWifiNetworkMutationVariables = Exact<{
  input: CreateFreeWifiConfigurationInput;
}>;


export type CreateFreeWifiNetworkMutation = { __typename?: 'Mutation', createFreeWifiNetwork: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type UpdateFreeWifiNetworkMutationVariables = Exact<{
  input: UpdateFreeWifiConfigurationInput;
}>;


export type UpdateFreeWifiNetworkMutation = { __typename?: 'Mutation', updateFreeWifiNetwork: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type GetNetworksQueryVariables = Exact<{
  projectId: Scalars['ID'];
}>;


export type GetNetworksQuery = { __typename?: 'Query', networks: Array<{ __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } }> };

export type GetNetworkQueryVariables = Exact<{
  networkId: Scalars['ID'];
}>;


export type GetNetworkQuery = { __typename?: 'Query', network: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type DeleteNetworkMutationVariables = Exact<{
  networkId: Scalars['ID'];
}>;


export type DeleteNetworkMutation = { __typename?: 'Mutation', removeNetwork: { __typename?: 'Network', id: string, name: string, createdAt: any, updatedAt: any, config: { __typename?: 'FreeWifiConfiguration', ssid: string, type: NetworkType } | { __typename?: 'WifiConfiguration', ssid: string, password: string, type: NetworkType } } };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } }> };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } } };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } } };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', removeProject: boolean };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', id: string, name: string, description: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } } };

export type CreateSensorMutationVariables = Exact<{
  input: CreateSensorInput;
}>;


export type CreateSensorMutation = { __typename?: 'Mutation', createSensor: { __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any } };

export type UpdateSensorMutationVariables = Exact<{
  input: UpdateSensorInput;
}>;


export type UpdateSensorMutation = { __typename?: 'Mutation', updateSensor: { __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any } };

export type DeleteSensorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSensorMutation = { __typename?: 'Mutation', removeSensor: boolean };

export type GetSensorsQueryVariables = Exact<{
  projectId: Scalars['ID'];
}>;


export type GetSensorsQuery = { __typename?: 'Query', sensors: Array<{ __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any }> };

export type GetSensorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSensorQuery = { __typename?: 'Query', sensor: { __typename?: 'Sensor', id: string, name: string, description: string, type: SensorType, createdAt: any, updatedAt: any } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type VerifyUserMutationVariables = Exact<{
  input: VerifyUserInput;
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type GetUserDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserDataQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type GetUserCodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserCodeQuery = { __typename?: 'Query', userCode: { __typename?: 'UserCode', code: number, createdAt: any, id: string, type: string, updatedAt: any } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export const FragmentUserCodeFragmentDoc = gql`
    fragment FragmentUserCode on UserCode {
  code
  createdAt
  id
  type
  updatedAt
}
    `;
export const FragmentUserFragmentDoc = gql`
    fragment FragmentUser on User {
  id
  firstName
  lastName
  email
  createdAt
  updatedAt
}
    `;
export const FragmentProjectFragmentDoc = gql`
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
    ${FragmentUserFragmentDoc}`;
export const FragmentNetworksFragmentDoc = gql`
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
export const FragmentBoardConfigFragmentDoc = gql`
    fragment FragmentBoardConfig on BoardConfig {
  id
  createdAt
  updatedAt
  networks {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export const FragmentSensorFragmentDoc = gql`
    fragment FragmentSensor on Sensor {
  id
  name
  description
  type
  createdAt
  updatedAt
}
    `;
export const FragmentBoardFragmentDoc = gql`
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
    ${FragmentUserFragmentDoc}
${FragmentProjectFragmentDoc}
${FragmentBoardConfigFragmentDoc}
${FragmentSensorFragmentDoc}`;
export const FragmentDeviceFragmentDoc = gql`
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
    ${FragmentBoardFragmentDoc}`;
export const CreateBoardDocument = gql`
    mutation CreateBoard($input: CreateBoardInput!) {
  createBoard(input: $input) {
    ...FragmentBoard
  }
}
    ${FragmentBoardFragmentDoc}`;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBoardMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, options);
      }
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
export const UpdateBoardDocument = gql`
    mutation UpdateBoard($input: UpdateBoardInput!) {
  updateBoard(input: $input) {
    ...FragmentBoard
  }
}
    ${FragmentBoardFragmentDoc}`;
export type UpdateBoardMutationFn = Apollo.MutationFunction<UpdateBoardMutation, UpdateBoardMutationVariables>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoardMutation, UpdateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(UpdateBoardDocument, options);
      }
export type UpdateBoardMutationHookResult = ReturnType<typeof useUpdateBoardMutation>;
export type UpdateBoardMutationResult = Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<UpdateBoardMutation, UpdateBoardMutationVariables>;
export const UpdateBoardConfigDocument = gql`
    mutation UpdateBoardConfig($input: UpdateBoardConfigInput!) {
  updateBoardConfig(input: $input)
}
    `;
export type UpdateBoardConfigMutationFn = Apollo.MutationFunction<UpdateBoardConfigMutation, UpdateBoardConfigMutationVariables>;

/**
 * __useUpdateBoardConfigMutation__
 *
 * To run a mutation, you first call `useUpdateBoardConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardConfigMutation, { data, loading, error }] = useUpdateBoardConfigMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoardConfigMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoardConfigMutation, UpdateBoardConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBoardConfigMutation, UpdateBoardConfigMutationVariables>(UpdateBoardConfigDocument, options);
      }
export type UpdateBoardConfigMutationHookResult = ReturnType<typeof useUpdateBoardConfigMutation>;
export type UpdateBoardConfigMutationResult = Apollo.MutationResult<UpdateBoardConfigMutation>;
export type UpdateBoardConfigMutationOptions = Apollo.BaseMutationOptions<UpdateBoardConfigMutation, UpdateBoardConfigMutationVariables>;
export const DeleteBoardDocument = gql`
    mutation DeleteBoard($id: ID!) {
  removeBoard(id: $id)
}
    `;
export type DeleteBoardMutationFn = Apollo.MutationFunction<DeleteBoardMutation, DeleteBoardMutationVariables>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBoardMutation, DeleteBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(DeleteBoardDocument, options);
      }
export type DeleteBoardMutationHookResult = ReturnType<typeof useDeleteBoardMutation>;
export type DeleteBoardMutationResult = Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const GetBoardDocument = gql`
    query GetBoard($id: ID!) {
  board(id: $id) {
    ...FragmentBoard
  }
}
    ${FragmentBoardFragmentDoc}`;

/**
 * __useGetBoardQuery__
 *
 * To run a query within a React component, call `useGetBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardQuery(baseOptions: Apollo.QueryHookOptions<GetBoardQuery, GetBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, options);
      }
export function useGetBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardQuery, GetBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, options);
        }
export type GetBoardQueryHookResult = ReturnType<typeof useGetBoardQuery>;
export type GetBoardLazyQueryHookResult = ReturnType<typeof useGetBoardLazyQuery>;
export type GetBoardQueryResult = Apollo.QueryResult<GetBoardQuery, GetBoardQueryVariables>;
export const GetBoardsDocument = gql`
    query GetBoards($projectId: ID!) {
  boards(projectId: $projectId) {
    ...FragmentBoard
  }
}
    ${FragmentBoardFragmentDoc}`;

/**
 * __useGetBoardsQuery__
 *
 * To run a query within a React component, call `useGetBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetBoardsQuery(baseOptions: Apollo.QueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, options);
      }
export function useGetBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, options);
        }
export type GetBoardsQueryHookResult = ReturnType<typeof useGetBoardsQuery>;
export type GetBoardsLazyQueryHookResult = ReturnType<typeof useGetBoardsLazyQuery>;
export type GetBoardsQueryResult = Apollo.QueryResult<GetBoardsQuery, GetBoardsQueryVariables>;
export const CreateDeviceDocument = gql`
    mutation CreateDevice($input: CreateDeviceInput!) {
  createDevice(input: $input) {
    ...FragmentDevice
  }
}
    ${FragmentDeviceFragmentDoc}`;
export type CreateDeviceMutationFn = Apollo.MutationFunction<CreateDeviceMutation, CreateDeviceMutationVariables>;

/**
 * __useCreateDeviceMutation__
 *
 * To run a mutation, you first call `useCreateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeviceMutation, { data, loading, error }] = useCreateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeviceMutation, CreateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeviceMutation, CreateDeviceMutationVariables>(CreateDeviceDocument, options);
      }
export type CreateDeviceMutationHookResult = ReturnType<typeof useCreateDeviceMutation>;
export type CreateDeviceMutationResult = Apollo.MutationResult<CreateDeviceMutation>;
export type CreateDeviceMutationOptions = Apollo.BaseMutationOptions<CreateDeviceMutation, CreateDeviceMutationVariables>;
export const UpdateDeviceDocument = gql`
    mutation UpdateDevice($input: UpdateDeviceInput!) {
  updateDevice(input: $input) {
    ...FragmentDevice
  }
}
    ${FragmentDeviceFragmentDoc}`;
export type UpdateDeviceMutationFn = Apollo.MutationFunction<UpdateDeviceMutation, UpdateDeviceMutationVariables>;

/**
 * __useUpdateDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceMutation, { data, loading, error }] = useUpdateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceMutation, UpdateDeviceMutationVariables>(UpdateDeviceDocument, options);
      }
export type UpdateDeviceMutationHookResult = ReturnType<typeof useUpdateDeviceMutation>;
export type UpdateDeviceMutationResult = Apollo.MutationResult<UpdateDeviceMutation>;
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>;
export const GetDevicesDocument = gql`
    query GetDevices($projectId: ID!) {
  devices(projectId: $projectId) {
    ...FragmentDevice
  }
}
    ${FragmentDeviceFragmentDoc}`;

/**
 * __useGetDevicesQuery__
 *
 * To run a query within a React component, call `useGetDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDevicesQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetDevicesQuery(baseOptions: Apollo.QueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
      }
export function useGetDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
        }
export type GetDevicesQueryHookResult = ReturnType<typeof useGetDevicesQuery>;
export type GetDevicesLazyQueryHookResult = ReturnType<typeof useGetDevicesLazyQuery>;
export type GetDevicesQueryResult = Apollo.QueryResult<GetDevicesQuery, GetDevicesQueryVariables>;
export const GetDeviceDocument = gql`
    query GetDevice($id: ID!) {
  device(id: $id) {
    ...FragmentDevice
  }
}
    ${FragmentDeviceFragmentDoc}`;

/**
 * __useGetDeviceQuery__
 *
 * To run a query within a React component, call `useGetDeviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDeviceQuery(baseOptions: Apollo.QueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, options);
      }
export function useGetDeviceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, options);
        }
export type GetDeviceQueryHookResult = ReturnType<typeof useGetDeviceQuery>;
export type GetDeviceLazyQueryHookResult = ReturnType<typeof useGetDeviceLazyQuery>;
export type GetDeviceQueryResult = Apollo.QueryResult<GetDeviceQuery, GetDeviceQueryVariables>;
export const DeleteDeviceDocument = gql`
    mutation DeleteDevice($id: ID!) {
  removeDevice(id: $id)
}
    `;
export type DeleteDeviceMutationFn = Apollo.MutationFunction<DeleteDeviceMutation, DeleteDeviceMutationVariables>;

/**
 * __useDeleteDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceMutation, { data, loading, error }] = useDeleteDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDeviceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDeviceMutation, DeleteDeviceMutationVariables>(DeleteDeviceDocument, options);
      }
export type DeleteDeviceMutationHookResult = ReturnType<typeof useDeleteDeviceMutation>;
export type DeleteDeviceMutationResult = Apollo.MutationResult<DeleteDeviceMutation>;
export type DeleteDeviceMutationOptions = Apollo.BaseMutationOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>;
export const CreateWifiNetworkDocument = gql`
    mutation CreateWifiNetwork($input: CreateWifiConfigurationInput!) {
  createWifiNetwork(input: $input) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export type CreateWifiNetworkMutationFn = Apollo.MutationFunction<CreateWifiNetworkMutation, CreateWifiNetworkMutationVariables>;

/**
 * __useCreateWifiNetworkMutation__
 *
 * To run a mutation, you first call `useCreateWifiNetworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWifiNetworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWifiNetworkMutation, { data, loading, error }] = useCreateWifiNetworkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWifiNetworkMutation(baseOptions?: Apollo.MutationHookOptions<CreateWifiNetworkMutation, CreateWifiNetworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWifiNetworkMutation, CreateWifiNetworkMutationVariables>(CreateWifiNetworkDocument, options);
      }
export type CreateWifiNetworkMutationHookResult = ReturnType<typeof useCreateWifiNetworkMutation>;
export type CreateWifiNetworkMutationResult = Apollo.MutationResult<CreateWifiNetworkMutation>;
export type CreateWifiNetworkMutationOptions = Apollo.BaseMutationOptions<CreateWifiNetworkMutation, CreateWifiNetworkMutationVariables>;
export const UpdateWifiNetworkDocument = gql`
    mutation UpdateWifiNetwork($input: UpdateWifiConfigurationInput!) {
  updateWifiNetwork(input: $input) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export type UpdateWifiNetworkMutationFn = Apollo.MutationFunction<UpdateWifiNetworkMutation, UpdateWifiNetworkMutationVariables>;

/**
 * __useUpdateWifiNetworkMutation__
 *
 * To run a mutation, you first call `useUpdateWifiNetworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWifiNetworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWifiNetworkMutation, { data, loading, error }] = useUpdateWifiNetworkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWifiNetworkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWifiNetworkMutation, UpdateWifiNetworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWifiNetworkMutation, UpdateWifiNetworkMutationVariables>(UpdateWifiNetworkDocument, options);
      }
export type UpdateWifiNetworkMutationHookResult = ReturnType<typeof useUpdateWifiNetworkMutation>;
export type UpdateWifiNetworkMutationResult = Apollo.MutationResult<UpdateWifiNetworkMutation>;
export type UpdateWifiNetworkMutationOptions = Apollo.BaseMutationOptions<UpdateWifiNetworkMutation, UpdateWifiNetworkMutationVariables>;
export const CreateFreeWifiNetworkDocument = gql`
    mutation CreateFreeWifiNetwork($input: CreateFreeWifiConfigurationInput!) {
  createFreeWifiNetwork(input: $input) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export type CreateFreeWifiNetworkMutationFn = Apollo.MutationFunction<CreateFreeWifiNetworkMutation, CreateFreeWifiNetworkMutationVariables>;

/**
 * __useCreateFreeWifiNetworkMutation__
 *
 * To run a mutation, you first call `useCreateFreeWifiNetworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFreeWifiNetworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFreeWifiNetworkMutation, { data, loading, error }] = useCreateFreeWifiNetworkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFreeWifiNetworkMutation(baseOptions?: Apollo.MutationHookOptions<CreateFreeWifiNetworkMutation, CreateFreeWifiNetworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFreeWifiNetworkMutation, CreateFreeWifiNetworkMutationVariables>(CreateFreeWifiNetworkDocument, options);
      }
export type CreateFreeWifiNetworkMutationHookResult = ReturnType<typeof useCreateFreeWifiNetworkMutation>;
export type CreateFreeWifiNetworkMutationResult = Apollo.MutationResult<CreateFreeWifiNetworkMutation>;
export type CreateFreeWifiNetworkMutationOptions = Apollo.BaseMutationOptions<CreateFreeWifiNetworkMutation, CreateFreeWifiNetworkMutationVariables>;
export const UpdateFreeWifiNetworkDocument = gql`
    mutation UpdateFreeWifiNetwork($input: UpdateFreeWifiConfigurationInput!) {
  updateFreeWifiNetwork(input: $input) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export type UpdateFreeWifiNetworkMutationFn = Apollo.MutationFunction<UpdateFreeWifiNetworkMutation, UpdateFreeWifiNetworkMutationVariables>;

/**
 * __useUpdateFreeWifiNetworkMutation__
 *
 * To run a mutation, you first call `useUpdateFreeWifiNetworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFreeWifiNetworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFreeWifiNetworkMutation, { data, loading, error }] = useUpdateFreeWifiNetworkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFreeWifiNetworkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFreeWifiNetworkMutation, UpdateFreeWifiNetworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFreeWifiNetworkMutation, UpdateFreeWifiNetworkMutationVariables>(UpdateFreeWifiNetworkDocument, options);
      }
export type UpdateFreeWifiNetworkMutationHookResult = ReturnType<typeof useUpdateFreeWifiNetworkMutation>;
export type UpdateFreeWifiNetworkMutationResult = Apollo.MutationResult<UpdateFreeWifiNetworkMutation>;
export type UpdateFreeWifiNetworkMutationOptions = Apollo.BaseMutationOptions<UpdateFreeWifiNetworkMutation, UpdateFreeWifiNetworkMutationVariables>;
export const GetNetworksDocument = gql`
    query GetNetworks($projectId: ID!) {
  networks(projectId: $projectId) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;

/**
 * __useGetNetworksQuery__
 *
 * To run a query within a React component, call `useGetNetworksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNetworksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNetworksQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetNetworksQuery(baseOptions: Apollo.QueryHookOptions<GetNetworksQuery, GetNetworksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNetworksQuery, GetNetworksQueryVariables>(GetNetworksDocument, options);
      }
export function useGetNetworksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNetworksQuery, GetNetworksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNetworksQuery, GetNetworksQueryVariables>(GetNetworksDocument, options);
        }
export type GetNetworksQueryHookResult = ReturnType<typeof useGetNetworksQuery>;
export type GetNetworksLazyQueryHookResult = ReturnType<typeof useGetNetworksLazyQuery>;
export type GetNetworksQueryResult = Apollo.QueryResult<GetNetworksQuery, GetNetworksQueryVariables>;
export const GetNetworkDocument = gql`
    query GetNetwork($networkId: ID!) {
  network(networkId: $networkId) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;

/**
 * __useGetNetworkQuery__
 *
 * To run a query within a React component, call `useGetNetworkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNetworkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNetworkQuery({
 *   variables: {
 *      networkId: // value for 'networkId'
 *   },
 * });
 */
export function useGetNetworkQuery(baseOptions: Apollo.QueryHookOptions<GetNetworkQuery, GetNetworkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNetworkQuery, GetNetworkQueryVariables>(GetNetworkDocument, options);
      }
export function useGetNetworkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNetworkQuery, GetNetworkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNetworkQuery, GetNetworkQueryVariables>(GetNetworkDocument, options);
        }
export type GetNetworkQueryHookResult = ReturnType<typeof useGetNetworkQuery>;
export type GetNetworkLazyQueryHookResult = ReturnType<typeof useGetNetworkLazyQuery>;
export type GetNetworkQueryResult = Apollo.QueryResult<GetNetworkQuery, GetNetworkQueryVariables>;
export const DeleteNetworkDocument = gql`
    mutation DeleteNetwork($networkId: ID!) {
  removeNetwork(networkId: $networkId) {
    ...FragmentNetworks
  }
}
    ${FragmentNetworksFragmentDoc}`;
export type DeleteNetworkMutationFn = Apollo.MutationFunction<DeleteNetworkMutation, DeleteNetworkMutationVariables>;

/**
 * __useDeleteNetworkMutation__
 *
 * To run a mutation, you first call `useDeleteNetworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNetworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNetworkMutation, { data, loading, error }] = useDeleteNetworkMutation({
 *   variables: {
 *      networkId: // value for 'networkId'
 *   },
 * });
 */
export function useDeleteNetworkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNetworkMutation, DeleteNetworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNetworkMutation, DeleteNetworkMutationVariables>(DeleteNetworkDocument, options);
      }
export type DeleteNetworkMutationHookResult = ReturnType<typeof useDeleteNetworkMutation>;
export type DeleteNetworkMutationResult = Apollo.MutationResult<DeleteNetworkMutation>;
export type DeleteNetworkMutationOptions = Apollo.BaseMutationOptions<DeleteNetworkMutation, DeleteNetworkMutationVariables>;
export const GetProjectsDocument = gql`
    query GetProjects {
  projects {
    ...FragmentProject
  }
}
    ${FragmentProjectFragmentDoc}`;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectDocument = gql`
    query GetProject($id: ID!) {
  project(id: $id) {
    ...FragmentProject
  }
}
    ${FragmentProjectFragmentDoc}`;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    ...FragmentProject
  }
}
    ${FragmentProjectFragmentDoc}`;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($id: ID!) {
  removeProject(id: $id)
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    ...FragmentProject
  }
}
    ${FragmentProjectFragmentDoc}`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const CreateSensorDocument = gql`
    mutation CreateSensor($input: CreateSensorInput!) {
  createSensor(input: $input) {
    ...FragmentSensor
  }
}
    ${FragmentSensorFragmentDoc}`;
export type CreateSensorMutationFn = Apollo.MutationFunction<CreateSensorMutation, CreateSensorMutationVariables>;

/**
 * __useCreateSensorMutation__
 *
 * To run a mutation, you first call `useCreateSensorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSensorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSensorMutation, { data, loading, error }] = useCreateSensorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSensorMutation(baseOptions?: Apollo.MutationHookOptions<CreateSensorMutation, CreateSensorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSensorMutation, CreateSensorMutationVariables>(CreateSensorDocument, options);
      }
export type CreateSensorMutationHookResult = ReturnType<typeof useCreateSensorMutation>;
export type CreateSensorMutationResult = Apollo.MutationResult<CreateSensorMutation>;
export type CreateSensorMutationOptions = Apollo.BaseMutationOptions<CreateSensorMutation, CreateSensorMutationVariables>;
export const UpdateSensorDocument = gql`
    mutation UpdateSensor($input: UpdateSensorInput!) {
  updateSensor(input: $input) {
    ...FragmentSensor
  }
}
    ${FragmentSensorFragmentDoc}`;
export type UpdateSensorMutationFn = Apollo.MutationFunction<UpdateSensorMutation, UpdateSensorMutationVariables>;

/**
 * __useUpdateSensorMutation__
 *
 * To run a mutation, you first call `useUpdateSensorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSensorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSensorMutation, { data, loading, error }] = useUpdateSensorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSensorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSensorMutation, UpdateSensorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSensorMutation, UpdateSensorMutationVariables>(UpdateSensorDocument, options);
      }
export type UpdateSensorMutationHookResult = ReturnType<typeof useUpdateSensorMutation>;
export type UpdateSensorMutationResult = Apollo.MutationResult<UpdateSensorMutation>;
export type UpdateSensorMutationOptions = Apollo.BaseMutationOptions<UpdateSensorMutation, UpdateSensorMutationVariables>;
export const DeleteSensorDocument = gql`
    mutation DeleteSensor($id: ID!) {
  removeSensor(id: $id)
}
    `;
export type DeleteSensorMutationFn = Apollo.MutationFunction<DeleteSensorMutation, DeleteSensorMutationVariables>;

/**
 * __useDeleteSensorMutation__
 *
 * To run a mutation, you first call `useDeleteSensorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSensorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSensorMutation, { data, loading, error }] = useDeleteSensorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSensorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSensorMutation, DeleteSensorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSensorMutation, DeleteSensorMutationVariables>(DeleteSensorDocument, options);
      }
export type DeleteSensorMutationHookResult = ReturnType<typeof useDeleteSensorMutation>;
export type DeleteSensorMutationResult = Apollo.MutationResult<DeleteSensorMutation>;
export type DeleteSensorMutationOptions = Apollo.BaseMutationOptions<DeleteSensorMutation, DeleteSensorMutationVariables>;
export const GetSensorsDocument = gql`
    query GetSensors($projectId: ID!) {
  sensors(projectId: $projectId) {
    ...FragmentSensor
  }
}
    ${FragmentSensorFragmentDoc}`;

/**
 * __useGetSensorsQuery__
 *
 * To run a query within a React component, call `useGetSensorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetSensorsQuery(baseOptions: Apollo.QueryHookOptions<GetSensorsQuery, GetSensorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSensorsQuery, GetSensorsQueryVariables>(GetSensorsDocument, options);
      }
export function useGetSensorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSensorsQuery, GetSensorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSensorsQuery, GetSensorsQueryVariables>(GetSensorsDocument, options);
        }
export type GetSensorsQueryHookResult = ReturnType<typeof useGetSensorsQuery>;
export type GetSensorsLazyQueryHookResult = ReturnType<typeof useGetSensorsLazyQuery>;
export type GetSensorsQueryResult = Apollo.QueryResult<GetSensorsQuery, GetSensorsQueryVariables>;
export const GetSensorDocument = gql`
    query GetSensor($id: ID!) {
  sensor(id: $id) {
    ...FragmentSensor
  }
}
    ${FragmentSensorFragmentDoc}`;

/**
 * __useGetSensorQuery__
 *
 * To run a query within a React component, call `useGetSensorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSensorQuery(baseOptions: Apollo.QueryHookOptions<GetSensorQuery, GetSensorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSensorQuery, GetSensorQueryVariables>(GetSensorDocument, options);
      }
export function useGetSensorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSensorQuery, GetSensorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSensorQuery, GetSensorQueryVariables>(GetSensorDocument, options);
        }
export type GetSensorQueryHookResult = ReturnType<typeof useGetSensorQuery>;
export type GetSensorLazyQueryHookResult = ReturnType<typeof useGetSensorLazyQuery>;
export type GetSensorQueryResult = Apollo.QueryResult<GetSensorQuery, GetSensorQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    ...FragmentUser
  }
}
    ${FragmentUserFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($input: VerifyUserInput!) {
  verifyUser(input: $input) {
    ...FragmentUser
  }
}
    ${FragmentUserFragmentDoc}`;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const GetUserInfoDocument = gql`
    query getUserInfo {
  me {
    ...FragmentUser
  }
}
    ${FragmentUserFragmentDoc}`;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetUserDataDocument = gql`
    query getUserData($id: ID!) {
  user(id: $id) {
    ...FragmentUser
  }
}
    ${FragmentUserFragmentDoc}`;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions: Apollo.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
      }
export function useGetUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;
export const GetUserCodeDocument = gql`
    query getUserCode($id: ID!) {
  userCode(id: $id) {
    ...FragmentUserCode
  }
}
    ${FragmentUserCodeFragmentDoc}`;

/**
 * __useGetUserCodeQuery__
 *
 * To run a query within a React component, call `useGetUserCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserCodeQuery(baseOptions: Apollo.QueryHookOptions<GetUserCodeQuery, GetUserCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCodeQuery, GetUserCodeQueryVariables>(GetUserCodeDocument, options);
      }
export function useGetUserCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCodeQuery, GetUserCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCodeQuery, GetUserCodeQueryVariables>(GetUserCodeDocument, options);
        }
export type GetUserCodeQueryHookResult = ReturnType<typeof useGetUserCodeQuery>;
export type GetUserCodeLazyQueryHookResult = ReturnType<typeof useGetUserCodeLazyQuery>;
export type GetUserCodeQueryResult = Apollo.QueryResult<GetUserCodeQuery, GetUserCodeQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    ...FragmentUser
  }
}
    ${FragmentUserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;