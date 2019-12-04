import dotenv from 'dotenv'

dotenv.config()

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbPort: process.env.DB_PORT
}
