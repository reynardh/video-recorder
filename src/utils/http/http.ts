import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // headers: {
  //   'x-cors-api-key': "temp_368b76b526936e794eb3e109cc7fb026"
  // }
})

// instance.interceptors.request.use((config: any) => {
//   const { method, params } = config

//   const headers: any = {
//     token: localStorage.getItem('token')
//   }

//   if (method === 'get') {
//     headers['Cache-Control'] = 'no-cache'
//   }

//   if (method === 'delete') {
//     headers['Content-type'] = 'application/json;'
//     Object.assign(config, {
//       data: params,
//       params: {}
//     })
//   }

//   return {
//     ...config,
//     headers
//   }
// })

// instance.interceptors.response.use((v: any) => {
//   if (v.data?.code === 401) {
//     localStorage.removeItem('token')

//     return v.data
//   }
//   if (v.status === 200) {
//     return v.data
//   }

//   return Promise.reject(v)
// })
export default instance
