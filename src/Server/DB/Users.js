import { Connection } from ".";

export const all = async() =>{
return Connection.query('SELECT * from evenements');
}

export default{
    all
}