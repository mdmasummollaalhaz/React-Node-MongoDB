import React from 'react';
import './AddUser.css'
const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server
        fetch('http://localhost:6001/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>Please add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input className='btn' type="text" name="name" placeholder='Name' required />
                <br />
                <input className='btn' type="email" name="email" placeholder='Email' required />
                <br />
                <input className='btnSubmit' type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;