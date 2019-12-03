import { port } from './config'

const manifest = {
  server: {
    port
  },
  register: {
    plugins: [
      { plugin: require('hapi-swagger') },
      { plugin: require('@hapi/inert') },
      { plugin: require('@hapi/vision') },
      {
        plugin: require('./board')
      }
    ]
  }
}

export default manifest
