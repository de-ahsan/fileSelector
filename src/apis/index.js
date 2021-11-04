import { request } from './request';

export const getFolderStructure = () => {
  return request.get('folderStructure');
};
