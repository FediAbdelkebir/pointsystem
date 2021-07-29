import * as mysql from 'mysql';
import config from './Config/config';

import Users from './Users';

export const Connection = mysql.createConnection(config.mysql);
Connection.connect(err=>{
    if (err)console.log(err);
})

export default {
    Users
}