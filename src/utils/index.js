import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://rpass.herokuapp.com/api',
    headers: {
      Authorization: localStorage.getItem('token') 
    }
  })
}

export default axiosWithAuth;
