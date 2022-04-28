import React from 'react';
import './AddUser.css'
const AddUser = () => {
    
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