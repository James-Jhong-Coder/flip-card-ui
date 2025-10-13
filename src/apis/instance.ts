import axios from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useApiStore } from '@/stores/api';
import { useProfileStore } from '@/stores/profile';

const instance = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const { pushQueue } = useApiStore();
  const { token } = useProfileStore();
  const uuid = uuidv4();
  if (config.headers) {
    config.headers.Authorization = token;
    config.headers['X-REQUEST-UUID'] = uuid;
    config.headers['UUID'] = uuid;
  }
  pushQueue({ uuid });
  return config;
});

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { removeQueueByUUID } = useApiStore();
    const requestUUID = response.config.headers['X-REQUEST-UUID'];
    if (requestUUID) {
      removeQueueByUUID({ targetUUID: requestUUID });
    }
    return response;
  },
  async (error: AxiosError) => {
    const { removeQueueByUUID } = useApiStore();
    const requestUUID = error.config?.headers['X-REQUEST-UUID'];
    if (requestUUID) {
      removeQueueByUUID({ targetUUID: requestUUID });
    }
    return Promise.reject(error);
  },
);

export default instance;
