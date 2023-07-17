import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Dashboard({users,setUsers}) {
  let navigate=useNavigate()
  let data = [
    {
      title:"Earnings (Monthly)",
      value:"$40,000",
      color:"primary",
      icon:"fa-calendar",
      isProgress:false
    },
    {
      title:"Earnings (Anual)",
      value:"$160,000",
      color:"success",
      icon:"fa-dollar-sign",
      isProgress:false
    },
    {
      title:"Task",
      value:"100%",
      color:"info",
      icon:"fa-clipboard-list",
      isProgress:true
    },
    {
      title:"Pending Request",
      value:"18",
      color:"warning",
      icon:"fa-comments",
      isProgress:false
    }
  ]

  let handleDelete = (i)=>{
    let newUsers = [...users]
    newUsers.splice(i,1)
    setUsers(newUsers)
  }
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

          
      </div>
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Batch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.address}</td>
              <td>{e.batch}</td>
              <td>
              <Button variant='primary' onClick={()=>{navigate(`/EditUser/${i}`)}}>
                 
                  EditUser
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                &nbsp;
                &nbsp;
                <i class="fa-regular fa-user" onClick={()=>{navigate(`/Profile/${i}`)}}></i>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
      
  </>
}

export default Dashboard