import { useLocation } from 'react-router-dom';

export const useProjectId = (): string => {
  const { pathname } = useLocation();
  const projectId = pathname.split('/')[2];
  return projectId;
};
