import React, { FC, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddModal, FormField } from 'Components';
import { FormTypes } from 'Types';
import { useCreateProjectMutation } from 'Api/generated/graphql';
import { addProjectValidation } from 'Utils';
import { GET_PROJECTS } from 'Api';

const { projectDescription, projectName } = FormTypes;

export const ProjectsPageModal: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addProjectValidation),
    mode: 'onChange',
  });
  const [createProject] = useCreateProjectMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await createProject({
      variables: {
        input: {
          description: formData[projectDescription],
          name: formData[projectName],
        },
      },
      refetchQueries: [
        {
          query: GET_PROJECTS,
        },
      ],
    });
    setIsModalVisible(false);
  };

  return (
    <AddModal
      buttonText="Add project"
      title="Create Project"
      isProjectPage={true}
      isVisible={isModalVisible}
      handleVisibile={setIsModalVisible}
    >
      <Stack component="form" gap="30px">
        <FormField name={projectName} control={control} label="Project Name*" />
        <FormField
          name={projectDescription}
          control={control}
          label="Description*"
        />
        <Button
          variant="contained"
          sx={{ margin: '30px 0 0', maxWidth: '102px' }}
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Create
        </Button>
      </Stack>
    </AddModal>
  );
};
