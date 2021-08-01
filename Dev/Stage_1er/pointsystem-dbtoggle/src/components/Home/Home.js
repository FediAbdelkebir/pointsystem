import React,{useState, useEffect} from 'react';
import axios from "axios";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/users/")
        .then(res=>{
            setUsers(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

    const content = isLoading ? <h3>Loading Users...</h3> : users.length ? (
        users.map(user=>{
            return(
                <pre key={user._id} style={{marginBottom: "50px"}}>
                    <div>{user._id}</div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.enrollnumber}</div>
                </pre>
            )
        })
    ): <h3>Empty List !</h3>;

    return (
        <div>
            {content}
        </div> 
    );
}
