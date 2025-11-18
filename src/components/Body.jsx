import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"


const Body = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const fetchUser= async()=>{
        try{
            const res=await axios.get(BASE_URL + "/profile/view",{withCredentials:true});
            dispatch(addUser(res.data))
            
        }catch(err){
            if(err.status===401){
                navigate("/login")
            }
        console.log(err)
        }

    }
    useEffect(()=>{
        fetchUser();
    },[])
    
    return (
        <div className="body">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>  
    )
}

export default Body