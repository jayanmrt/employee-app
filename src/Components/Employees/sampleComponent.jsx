import React, { useState } from "react";

export default function SampleComponent(){
    const[employee,setEmployee]=useState([
        {id:1,name:'jayan',email:'test@test.com',designation:'poster'},
    ])
    const handleEdit=(id)=>{
        alert(id)
    }
     const handleDelete=(id)=>{
        setEmployee(employee.filter(emp=>emp.id!==id))
     }
    return(
        <div>
            <h2>Dashboard</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
            </tr>
      <tbody>
            {employee.map((emp,index)=>(
                <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.designation}</td>
                    <td><button onClick={(e)=>handleEdit(emp.id)}></button></td>
                    <td><button onClick={(e)=>handleDelete(emp.id)}></button></td>
                </tr>
            ))}
      </tbody>
        </table>
        </div>
    )
}