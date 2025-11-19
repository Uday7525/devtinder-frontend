

import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

const Requests = () => {
   const dispatch=useDispatch()
   const requests=useSelector(store=>store.requests)
   const fetchRequests=async()=>{
    try{
        const res=await axios.get(BASE_URL+'/user/requests/recieved',{withCredentials:true})
        dispatch(addRequest(res.data.requests))
    }catch(err){
        console.log(err)
    }
   };

   useEffect(()=>{
    fetchRequests()
   },[])

  return (requests&&
    <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-white-500 text-center text-3xl'>Requests</h1>
        {requests.map(request=>{
        const {_id,firstName,lastName,imageUrl,bio,age,gender}=request.fromUserId
        return(
        <div key={_id}className='flex justify-between bg-base-300 my-10 items-center px-4 py-4 mx-4 rounded-3xl w-1/2'>
            <div className='flex  items-center mx-4 px-4'>
            <figure>
            <img
            className='rounded-full h-25 w-25'
            src={imageUrl}
            alt="image" />
            </figure>
            <div className='mx-2'>
            <h1 className='font-bold text-xl'>{firstName +" " + lastName}</h1>
            {age &&gender&&<p>{age + ", "+ gender}</p>}
            <p>{bio}</p>
            </div>
            </div>
            <div className="card-actions justify-center my-2">
           <button className="btn btn-error">Reject</button>
           <button className="btn btn-success">Accept</button>
          </div>
        </div>)
        })}
    </div>
  )
}

export default Requests