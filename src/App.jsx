import { useState } from 'react'
import User from "./User"


function App() {
 
const [users , setUsers] = useState([
    {"id":1 ,"name":"ihab" , "email":"Ihab@gmail.com" , "isBlocked":false},
    {"id":1 ,"name":"mohanad" , "email":"Mohanad@gmail.com" , "isBlocked":true},
    {"id":1 ,"name":"abed" , "email":"abed@gmail.com" , "isBlocked":true},
    {"id":1 ,"name":"feras" , "email":"feras@gmail.com" , "isBlocked":false},
]);


return(
   <div className='users'>

{users.map( user => 
    <User name={user.name} email={user.email} ></User>
)}


    
 
   


    </div>
);

}

export default App
