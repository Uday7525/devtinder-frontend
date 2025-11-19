

import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'

const Request = () => {
   const dispatch=useDispatch()
   const requests=useSelector(store=>store.requests)

   // eslint-disable-next-line no-unused-vars
   const reviewRequest=async(status,_id)=>{
       try{
        const res =await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
        console.log(res)
        dispatch(removeRequest(_id))
       }catch(err){console.log(err)}
   }



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
  if(requests.length===0) return <h1 className='font-bold text-center my-10'>No requests Found</h1>
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
           <button className="btn btn-error" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
           <button className="btn btn-success" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
          </div>
        </div>)
        })}
    </div>
  )
}

export default Request