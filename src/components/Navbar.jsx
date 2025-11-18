import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import { removeUser } from "../utils/userSlice"

const Navbar = () => {

  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try{
      // eslint-disable-next-line no-unused-vars
      const response=await axios.post(BASE_URL+"/logout",{withCredentials:true})
      dispatch(removeUser())
      return navigate("/login")
    }catch(err){
      console.log(err)
    }
  }
  

  return (
     <div className="navbar bg-base-300 shadow-sm">
    <div className="flex-1 px-2 mx-2 w-72 flex items-center gap-2">
      <Link><img
        alt="Tailwind CSS Navbar component"
        src="https://res.cloudinary.com/dzrtrqc38/image/upload/v1763175172/ChatGPT_Image_Nov_15_2025_08_22_37_AM_oawyvt.png"
        className="h-13 w-13 mr-2 rounded-full hover:cursor-pointer hover:border-4  hover:border-orange-500" /></Link>
    <Link to="/"><span className="text-lg font-bold text-orange-500 hover:cursor-pointer hover:text-orange-300">DevTinder</span></Link>
  </div>
  {user&&(<div className="flex gap-2">
    <div className="flex justify-center items-center">Welcome, {user.firstName}</div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5 flex items-center">
        <div className="w-13 rounded-full border-3 border-orange-500 hover:border-orange-300">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.imageUrl} />
        </div>
      </div>
      
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>)}
</div>
  )
}

export default Navbar