import { NetworkType } from 'Api/generated/graphql';

export type FilteredItemsType = {
  id: string;
  name: string;
  description?: string;
  sensors?: number;
  networks?: number;
  type?: string;
  networkType?: NetworkType;
};
