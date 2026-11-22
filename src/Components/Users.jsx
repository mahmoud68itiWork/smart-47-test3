import React, { useState } from 'react';
import User from './User';
import {v4 as uuid} from "uuid"

const Users = () => {
  var [userData] = useState([
    {id:uuid(), name:"Mahmoud", age:23},
    {id:uuid(), name:"Ramy", age:53},
    {id:uuid(), name:"Ahmed", age:18},
    {id:uuid(), name:"Aya", age:35},
    {id:uuid(), name:"Walid", age:32},
    {id:uuid(), name:"Sarah", age:15},
  ])

  console.log(userData);
  
  return (
    <>
      {userData.map((elem)=><User key={elem.id} {...elem}></User>)}
      {/* <User></User> */}
    </>
  );
}

export default Users;
