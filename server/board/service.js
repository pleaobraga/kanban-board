import Sequelize, { Model } from 'sequelize'

import { dbHost, dbUser, dbPass, dbPort } from '../config'
import { async } from 'rxjs/internal/scheduler/async'

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

// class User extends Model {}
// User.init(
//   {
//     username: Sequelize.STRING,
//     birthday: Sequelize.DATE
//   },
//   { sequelize, modelName: 'user' }
// )

// sequelize
//   .sync({ force: true })
//   .then(() =>
//     User.create({
//       username: 'janedoe',
//       birthday: new Date(1980, 6, 20)
//     })
//   )
//   .then(jane => {
//     console.log(jane.toJSON())
//   })



sequelize
  .sync({ force: true })
  .then(() =>
    Card.create({
      index: 0,
      type: 'feature',
      duration: 3,
      severity: 'hight'
    })
  )
  .then(jane => {
    console.log(jane.toJSON())
  })

// module.exports.save = async input => {
//   return await Card.create({
//     index: 0,
//     type: 'feature',
//     duration: 3,
//     severity: 'hight'
//   })
// }
