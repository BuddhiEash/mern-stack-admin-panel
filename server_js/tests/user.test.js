import dbConnection from '../components/dbconnection'

it('works with async/await', async () => {
    expect.assertions(1);
    const mysqlConnection = dbConnection.getMysql()
    const query = `SELECT name FROM tbl_user`
    const userName = await mysqlConnection.query(query)
    expect(userName[0][0].name).toBe('Don')
});