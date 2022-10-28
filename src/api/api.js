import axios from "axios";

const url = 'http://localhost:5001/api/'
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: url
})

export const projectAPI = {
  getProject() {
    return instance.get('projects')
  },
  postProject(data) {
    return instance.post('projects', data)
  }
}

export const categoriesAPI = {
  getCategories() {
    return instance.get('projects/categories')
  }
}