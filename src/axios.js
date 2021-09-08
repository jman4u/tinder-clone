import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://tinder-backend200.herokuapp.com/',
});

export default instance;