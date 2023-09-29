import dbConnection from './dbconnection.js'

const mysqlConnection = dbConnection.getMysql()
const query = `SELECT name FROM tbl_user`
const userName = await mysqlConnection.query(query)

const user = () => {
    return userName[0][0].name
}

export default user
