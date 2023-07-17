import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Profile({users,setUsers}) {
   
    
   let params=useParams();
   let navigate=useNavigate();
    
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Profile</h1>
     </div>
     <div class="profile-container">
        <div class="profile-info">
            <h1>Name:{users[params.id].name} </h1>
            <p>Email:{users[params.id].email} </p>
            <p>Mobile:{users[params.id].mobile}</p>
            <p>Address:{users[params.id].address}</p>
            <p>Batch: {users[params.id].batch}</p>
            <Button variant='primary' onClick={()=>{navigate(`/EditUser/${[params.id]}`)}}>
                  
                  Edit Profile
                </Button>
        </div>
        
    </div>

    
    </div>    
    
  )
}

export default Profile