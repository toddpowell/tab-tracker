import axios from 'axios'

// Return a connector
export default() => {
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}