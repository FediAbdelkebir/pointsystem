import React, {useState} from "react";
import axios from "axios";

export default function AddUser({addUser}) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        enrollnumber: ""
    });

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    };

    const handleClick = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/users", {...user})
            .then(res=>{
                addUser(res.data);
            })
            .catch(err=>{
                console.error(err);
            });
    };

    return(
        <div className="add-user">
            <h2>Add User</h2>
            <form>
                <label htmlFor="name"><b>Name</b>
                <input onChange={handleChange} type="text" id={"name"} placeholder={"Name"}/>
                </label>

                <label htmlFor="name"><b>Email</b>
                <input onChange={handleChange} type="email" id={"email"} placeholder={"Email"}/>
                </label>

                <label htmlFor="enrollnumber"><b>EnrollNumber</b>
                <input onChange={handleChange} type="text" id={"enrollnumber"} placeholder={"enrollnumber"}/>
                </label>

                <button onClick={handleClick}>ADD</button>
            </form>
        </div>
    )
}