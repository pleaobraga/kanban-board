import Glue from '@hapi/glue'
var models = require('./models')

import manifest from './manifest'

const options = {
  relativeTo: __dirname
}

const startServer = async function() {
  try {
    models.sequelize.sync()
    const server = await Glue.compose(manifest, options)
    await server.start()
    console.log(`server started on port ${manifest.server.port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
