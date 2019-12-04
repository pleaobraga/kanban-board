import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import { dbHost, dbUser, dbPass, dbPort } from '../config'
import { async } from 'rxjs/internal/scheduler/async'
var db = {}

const basename = path.basename(__filename)

const sequelize = new Sequelize('kanban_board', dbUser, dbPass, {
  host: dbHost,
  port: 5432,
  dialect: 'postgres',
  define: {
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  },
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000
  }
})

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
