import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export enum FormTypes {
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  password = 'password',
  confirmPass = 'confirmPass',
  confirm1 = 'code1',
  confirm2 = 'code2',
  confirm3 = 'code3',
  confirm4 = 'code4',
  projectName = 'projectName',
  projectDescription = 'projectDescription',
  sensorDescription = 'sensorDescription',
  sensorName = 'sensorName',
  sensorType = 'sensorType',
  boardName = 'boardName',
  boardDescription = 'boardDescription',
  photo = 'photo',
  roles = 'roles',
  networkName = 'networkName',
  ssid = 'ssid',
  networkPassword = 'networkPassword',
  boardId = 'boardId',
  deviceName = 'deviceName',
  deviceDescription = 'deviceDescription',
  mac = 'mac',
}

export interface IFormField {
  control: Control<FieldValues, any>;
  name: FormTypes;
  label?: string;
  endAdorment?: ReactNode;
  defaultValue?: string;
}
