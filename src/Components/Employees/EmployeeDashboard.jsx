import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "./EmployeeContext";


export default function EmployeeDashboard() {
  const {employeeData,updateEmployeeData}=useEmployeeContext();
  const[editableRow,setEditableRow]=useState(null)
  const [localData,setLocalData]=useState(employeeData)
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/addemployee");
  };

const handleEdit=(e,index)=>{
setEditableRow(index);
}

const handleDelete=(index)=>{
   const updateData=[...localData];
   updateData.splice(index,1);
   setLocalData(updateData);
  
}

const handleInputChange=(index,field,value)=>{
const updatedData=[...localData];
updatedData[index][field]=value;
setLocalData(updatedData);
}
const handleSave=()=>{
  updateEmployeeData(localData);
  setEditableRow(null)
}
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <table className="employee-table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/*Map through employeeData to display rows */}
          {localData.map((employee,index)=>(
          <tr key={index}>
            <td>
              {editableRow===index?(
              <input type="text" value={employee.name} name="name" onChange={(e)=>handleInputChange(index,e.target.name,e.target.value)}/>
            ):(
              employee.name
            )}
              </td>
            <td>
              {editableRow===index?(
              <input type="email" value={employee.email} name="email"onChange={(e)=>handleInputChange(index,e.target.name,e.target.value)}/>
              ):(
                employee.email
              )
            }
            </td>
            <td>
              {editableRow===index?(
              <input type="text" value={employee.designation} name="designation" onChange={(e)=>handleInputChange(index,e.target.name,e.target.value)}/>
              ):(employee.designation)}</td>
            <td>
              <button onClick={(e)=>handleEdit(e,index)}>Edit</button>
              <button onClick={(e)=>handleDelete(index)}>Delete</button>
            </td>
          </tr>
         ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
