import { useState } from "react"
import UserCard from "./UserCard"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import Popup from "./Popup"


const EditProfile=({user})=>{
    const [firstName,setFirstName]=useState(user.firstName)
    const [lastName,setLastName]=useState(user.lastName)
    const [bio,setBio]=useState(user.bio)
    const [imageUrl,setImageUrl]=useState(user.imageUrl)
    const [age,setAge]=useState(user.age)
    const [gender,setGender]=useState(user.gender)
    const [skills,setSkills]=useState(user.skills)
    const [error,setError]=useState("")
    const [isUpdated,setIsUpdated]=useState(false)
    
    const dispatch=useDispatch()
    const updateProfile=async(e)=>{
        e.preventDefault()
        setError("")
        try{const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,bio,imageUrl,age,gender,skills},{withCredentials:true});
        dispatch(addUser(res.data?.data))
        setIsUpdated(true)
        }catch(err){
            setError(err.response.data)
            console.log(err)
        }
    }

    return(
        <div className="flex justify-center my-3">
        <div className="flex justify-center mx-2 px-4">
           <form className="flex flex-col justify-cente overflow-auto bg-base-300 rounded-xl" onSubmit={updateProfile}>
               <h1 className="text-bold text-3xl text-center mb-3">Edit Your Profile!</h1>
               <div className="flex gap-2">
                <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">First Name</label> 
                  <input type='text' 
                   value={firstName}
                   onChange={(e)=>setFirstName(e.target.value)}
                   className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
                <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">Last Name</label> 
                  <input type='text' 
                  value={lastName} 
                   onChange={(e)=>setLastName(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
               </div>
               <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">Bio</label> 
                  <input type='text' 
                  value={bio}
                  onChange={(e)=>setBio(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-14"/> 
                </div>
            
               <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">ImageUrl</label> 
                  <input type='text' 
                  value={imageUrl}
                   onChange={(e)=>setImageUrl(e.target.value)}
                  className="w-200 px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
                <div className="flex gap-2">
                <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">Age</label> 
                  <input type='text' 
                  value={age}
                   onChange={(e)=>setAge(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
                <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">Gender</label> 
                  <input type='text'
                  value={gender}
                   onChange={(e)=>setGender(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
               </div>
               <div className="flex flex-col mx-2 my-2">
                  <label className="text-white font-medium">Skills</label> 
                  <input type='text' 
                  value={skills}
                   onChange={(e)=>setSkills(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70 h-10"/> 
                </div>
                {error&&<p className="text-red-500 ml-2">{error}</p>}
                <div className="flex justify-center my-1">
               <button className="w-50 bg-indigo-500 text-white-600 font-bold py-3 rounded-xl  transition shadow-lg" type="submit">
                   Update
                </button>
                </div>
           </form>
        </div>
        <UserCard user={{firstName,lastName,imageUrl,bio,age,gender,skills}}/>
        {isUpdated&&<Popup onClose={() => setIsUpdated(false)} />}
        </div>
    )
}

export default EditProfile