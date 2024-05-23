import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "./State/Slice/Items";

 


const Admin = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const getadmindata = (e) => {
    setUsers({...users, [e.target.name] : e.target.value})

    // console.log(users);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createData(users))
    

  }
  
  return (
    <div>
     <form className="w-[20rem] mx-auto section" onSubmit={handleSubmit}>
      <label>add your product name</label>
      <input type="text" className="block bg-blue-100" name="name" onChange={getadmindata}/>
      <label>description for the product</label>
      <input type="text"  className="block bg-blue-100" name="desc" onChange={getadmindata}  />
      <label>price</label>
      <input type="number" className="block bg-blue-100" name="price"  onChange={getadmindata}/>
      <label>add your product name</label>
      <input type="file" className="block bg-blue-100" name="image" onChange={getadmindata} />
      <button type="submit" className="bg-gray-900 mt-5 p-4 text-violet-50">submit</button>
     </form>
    </div>
  );
};

export default Admin;
