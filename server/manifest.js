const manifest = {
  server: {
    port: 8080
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
