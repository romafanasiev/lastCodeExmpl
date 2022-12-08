import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormField } from 'Components';
import { addBoardValidation } from 'Utils';
import { AddBoardType, FormTypes } from 'Types';

type Props = {
  setIsValid: Dispatch<SetStateAction<boolean>>;
  formState: AddBoardType;
  setFormState: Dispatch<SetStateAction<AddBoardType>>;
  projectId: string;
};

export const AddBoardFirstStep: FC<Props> = ({
  setIsValid,
  formState,
  setFormState,
  projectId,
}) => {
  const { boardName, boardDescription } = FormTypes;
  const {
    control,
    watch,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addBoardValidation),
    mode: 'onChange',
  });
  const watchAllFields = watch();

  useEffect(() => {
    const subscription = watch((value) =>
      setFormState({
        ...formState,
        name: value[boardName],
        description: value[boardDescription],
        projectId,
      }),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setIsValid(isValid);
  }, [watchAllFields]);

  return (
    <Stack component="form" gap="30px">
      <FormField
        name={boardName}
        control={control}
        label="Name*"
        defaultValue={formState.name}
      />
      <FormField
        name={boardDescription}
        control={control}
        label="Description*"
        defaultValue={formState.description}
      />
    </Stack>
  );
};
