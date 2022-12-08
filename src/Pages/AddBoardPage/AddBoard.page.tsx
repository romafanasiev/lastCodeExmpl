import React, { FC } from 'react';
import { AddBoardForm } from 'Modules';
import { ContentContainer } from 'Components';

export const AddBoardPage: FC = () => {
  return (
    <ContentContainer>
      <AddBoardForm />
    </ContentContainer>
  );
};
