import Glue from '@hapi/glue'

import models from './models'
import manifest from './config/manifest'

const options = {
  relativeTo: __dirname
}

const startServer = async function() {
  try {
    models.sequelize.sync({ force: true })

    const server = await Glue.compose(manifest, options)
    await server.start()

    console.log(`server started on port ${manifest.server.port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
