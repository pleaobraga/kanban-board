const manifest = {
  server: {
    port: 8000
  },
  register: {
    plugins: [
      {
        plugin: require('./board')
      }
    ]
  }
}

export default manifest
