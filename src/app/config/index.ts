import dotenv, { config } from 'dotenv'
import path from 'path'

// Read .env file if it exists
config({ path: path.join(process.cwd(), '.env') })

export default {
  node_env: process.env.NODE_ENV,
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
}
