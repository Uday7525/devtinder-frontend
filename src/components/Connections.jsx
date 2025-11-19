
import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addConnections} from "../utils/connectionSlice"

const Connections = () => {
    const dispatch=useDispatch()
    const connections=useSelector(store=>store.connections)
    const fetchConnections=async()=>{
        try{
           const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
           dispatch(addConnections(res.data.data))
        }catch(err){
            console.log(err)
        }
    };
    useEffect(()=>{
        fetchConnections()
    },[])
    if (!connections) return;
    if(connections.length===0) return <h1>No Connections</h1>
  return (
    <div className='justify-center my-10 overflow-auto flex flex-col items-center'>
        <h1 className='"font-bold text-3xl text-center'>Connections</h1>
        {connections.map(connection=>
        <div key= {connection._id} className='flex items-center bg-base-300 m-4 p-4 w-1/2 rounded-lg'>
           <img className="w-25 h-25 rounded-full" src={connection.imageUrl}/>
           <div className='mx-2'>
            <h1>{connection.firstName + " " + connection.lastName}</h1>
            {connection.age&&connection.gender&&<p>{connection.age + ", " +connection.gender}</p>}
            <p>{connection.bio}</p>
           </div>
        </div>)}
    </div>
  )
}

export default Connections