import React,{useState,useEffect} from 'react'
import UserContext from './UserContext'
import axios from 'axios';

const UserState = (props) => {
    //call api

    const [user,setUser]=useState([]);
    // console.log(user);
    
    useEffect(() => {
        // const fetchData=()=>{
            axios.get("https://reqres.in/api/users?page=1")
            .then((response)=>{
                console.log(response);
                setUser(response.data.data);
            })
    
 
 
    }, [user])
   
    
  return (
   
        <UserContext.Provider value={user}> 
        {props.children}



        </UserContext.Provider>
  )
}

export default UserState
