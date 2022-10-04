import { create } from 'apisauce';

export const mainURL = create({
  baseURL: 'https://www.onlinetool.in/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const api = {
  auth(username: string, password: string) {
    return mainURL.post('/login/', { 'username': username, 'password': password })
  }
}