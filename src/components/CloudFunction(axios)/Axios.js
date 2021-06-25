import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/e-commerce-site-89d25/us-central1/api' // API (Cloud Function) URL
})

export default instance