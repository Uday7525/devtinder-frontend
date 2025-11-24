
import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addConnections} from "../utils/connectionSlice"
import { Link } from 'react-router-dom'

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
    if(connections.length===0) return <h1 className='font-bold text-3xl text-center my-10'>No Connections</h1>
  return (
    <div className='justify-center my-10 overflow-auto flex flex-col items-center'>
        <h1 className='font-bold text-white-500 text-center text-3xl'>Connections ({connections.length})</h1>
        {connections.map(connection=>
        <div key= {connection._id} className='flex justify-between items-center bg-base-300 m-4 p-4 w-1/2 rounded-lg'>
           <div>
           <img className="w-25 h-25 rounded-full" src={connection.imageUrl}/>
           <div className='mx-2'>
            <h1>{connection.firstName + " " + connection.lastName}</h1>
            {connection.age&&connection.gender&&<p>{connection.age + ", " +connection.gender}</p>}
            <p >{connection.bio}</p>
            </div>
           </div>
           <Link to={"/chat/"+ connection._id}><button className='bg-primary text-white p-4 rounded-xl'>Chat</button></Link>
        </div>)}
    </div>
  )
}

export default Connections