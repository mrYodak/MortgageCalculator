import axios from 'axios'
//baseURL: 'http://localhost:3000/api/users',
//baseURL: process.env.VUE_APP_BASE_API_URL,
export const UsersService = {
  http: axios.create({
    baseURL: 'http://localhost:3000/api/users',
  }),
  get() {
    return this.http.get()
  },
  post(userData) {
    return this.http.post('', userData)
  },
  put(id, userData) {
    return this.http.put(`/${id}`, userData)
  },
  async delete(id) {
    try {
      const response = await this.http.delete(`/${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  },
}
