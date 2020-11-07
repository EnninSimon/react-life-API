import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersAgain = () => {
    let myUsers = [];
    const [users, setUsers] = useState(myUsers);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            <h1 style={{textAlign:"center"}}>All Users</h1>
            {users.map((user) =>
                        <div >
                            <div style={{borderStyle:"ridge", margin:"4px 10px", backgroundColor:"#E3DEC1"}}>
                                <p style={{ marginLeft: "8px" }}>
                                    <b>Username:</b> {user.username}
                                </p>
                                <p style={{ marginLeft: "8px" }}>
                                    <b>ID:</b> {user.id}
                                </p>
                                <p style={{ marginLeft: "8px" }}>
                                    <b>Website:</b> {user.website}
                                </p>
                                <p style={{ marginLeft: "8px" }}>
                                    <b>Address:</b> {user.address.city}
                                </p>
                                <p style={{ marginLeft: "8px" }}>
                                    <b>Phone:</b> {user.phone}
                                </p>
                                
                            </div>
                        </div>)}
        </div>
    );
}

export default UsersAgain;
