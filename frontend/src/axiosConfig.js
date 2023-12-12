import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      return axiosInstance.post('http://127.0.0.1:8000/api/token/refresh/', { refresh: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.access);

            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access;
            originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;
            
            return axiosInstance(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;