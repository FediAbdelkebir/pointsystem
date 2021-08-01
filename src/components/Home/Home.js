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

    const content = isLoading ? <h3>Loading Users...</h3> : (
        users.map(user=>{
            return(
                <pre key={user.id} style={{marginBottom: "50px"}}>
                    <div>{user.id}</div>
                    <div>{user.idcreator}</div>
                    <div>{user.nbr_guest}</div>
                    <div>{user.type}</div>
                    <div>{user.titre}</div>
                    <div>{user.adress}</div>
                    <div>{user.description}</div>
                    <div>{user.start_date}</div>
                    <div>{user.end_date}</div>
                    <div>{user.url}</div>
                </pre>
            )
        })
    );

    return (
        <div>
            {content}
        </div> 
    );
}
