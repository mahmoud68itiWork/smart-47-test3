function User({id, age, name}){
  // console.log(props);

  // var {id, name,age} = props
  
  return(
    <>
      {/* <div style={{textAlign:"center",backgroundColor:"cornflowerblue", color:"white", width:"80%", margin:"10px auto", padding:"10px", borderRadius:"8px"}}>
        <div>id: 1</div>
        <div>name: ahmed</div>
        <div>age: 26</div>
      </div> */}
      <div style={{textAlign:"center",backgroundColor:"cornflowerblue", color:"white", width:"80%", margin:"10px auto", padding:"10px", borderRadius:"8px"}}>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>age: {age}</div>
      </div>
    </>
  )
}

export default User;

// import User from "./User.jsx"
// import A from "./User.jsx"
// export var fname= "llll"
// export var age = 23

// import {fname, age} from "/User.jsx"