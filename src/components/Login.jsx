import { useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
import {BASE_URL} from "../utils/constants"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [emailId, setEmailId] = useState("pavanpalsam@gmail.com");
    const [password, setPassword] = useState("Pavan@7525");
    const [error,setError]=useState("");
    const[showPass,setShowPass]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post( BASE_URL + "/login", {emailId, password},{withCredentials:true});
            dispatch(addUser(response.data))
            return navigate("/")
        }catch(error){
          setError("Invalid EmailId or Password")
          console.error("Login failed", error);
        }
    }

  return (
    
  <div className="flex justify-center mt-15 mb-15">
  <div className="w-full max-w-md bg-gray-900 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/30">

    <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>

    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="text-white font-medium">Email</label>
        <input
          type="email"
          value={emailId}
          placeholder="Enter your email"
          className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70"
          onChange={(e)=>setEmailId(e.target.value)}
        />
      </div>
      <div>
        <label className="text-white font-medium">Password</label>
        <input
          type={!showPass?"password":"text"}
          value={password}
          placeholder="Enter your password"
          className="w-full px-4 py-3 mt-1 rounded-xl bg-white/30 border border-white/40 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/70"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center hover:cursor-pointer">
        <input type="checkbox"
        onClick={()=>setShowPass(prevState=>!prevState)}
        />
        <span className="ml-1 text-center">show password</span>
      </div>
      <div className="flex justify-end">
        <a href="#" className="text-white/80 text-sm hover:text-white underline">
          Forgot password?
        </a>
      </div>
      <button
        className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-white/90 transition shadow-lg"
      >
        Login
      </button>
      <p className="text-red-500 text-center">{error}</p>
    </form>
    <p className="text-center text-white/80 mt-6">
      Don’t have an account?
      <a href="#" className="text-white font-semibold underline hover:text-white/90">Sign Up</a>
    </p>
  </div>
  </div>
  )
}

export default Login;