import dbConnection from './dbconnection.js'

const mysqlConnection = dbConnection.getMysql()

const user = async () => {
    const query = `SELECT first_name FROM tbl_user LIMIT 1`
    let firstName = await mysqlConnection.query(query)
    firstName = firstName[0][0].first_name
    return firstName
}

const login = async (username, password) => {
    try {
        const query = `SELECT id FROM tbl_user WHERE username = '${username}' AND password = '${password}'`
        let id = await mysqlConnection.query(query)
        id = id[0][0].id
        return id ? true : false   
    } catch (error) {
        console.log(`Error : `, error);
    }
}

export { user, login }
