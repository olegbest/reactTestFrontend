import httpClient from './httpClient';

export default {
  createFile: (data: FormData) => {
    return httpClient.post('/files', data);
  }
};
