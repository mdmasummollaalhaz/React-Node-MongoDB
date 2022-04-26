import React from 'react';
import './Adduser.css';

const Adduser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email}

        // Send data to the server
        fetch('http://localhost:6001/user', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{console.log('Success', data)})
    }
    return (
        <div>
            <h1>Please add a new user</h1>
            <form onSubmit={handleAddUser}>
                <input className='btn' type="text" name="name" id="" placeholder='Name' required/>
                <br />
                <input className='btn' type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input className='btnSubmit' type="submit" value="Add new user" />
            </form>
        </div>
    );
};

export default Adduser;