import axios from 'axios';

// Creating a new base instance
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});