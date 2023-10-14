import dbConnection from './dbconnection.js'

const mysqlConnection = dbConnection.getMysql()
const query = `SELECT name FROM tbl_user`
let userName = await mysqlConnection.query(query)
userName = userName[0][0].name

const user = () => {
    return userName
}

export { user }
