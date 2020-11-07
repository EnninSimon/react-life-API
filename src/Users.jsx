import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                console.log("users: ", users);
                this.setState({ users: users });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Users</h1>
                
                <div>
                    {this.state.users.map((user) =>
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
            </div>
        );
    }
}

export default Users;
