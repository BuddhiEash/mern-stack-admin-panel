import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const dbConnection = {
    getMysql: () => {
        return mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
          }).promise()
    }
}

export default dbConnection