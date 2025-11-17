import { useSelector } from "react-redux"

const Navbar = () => {

  const user=useSelector(store=>store.user)

  return (
     <div className="navbar bg-base-300 shadow-sm">
    <div className="flex-1 px-2 mx-2 w-72 flex items-center gap-2">
      <img
        alt="Tailwind CSS Navbar component"
        src="https://res.cloudinary.com/dzrtrqc38/image/upload/v1763175172/ChatGPT_Image_Nov_15_2025_08_22_37_AM_oawyvt.png"
        className="h-13 w-13 mr-2 rounded-full hover:cursor-pointer hover:border-4  hover:border-orange-500" />
    <span className="text-lg font-bold text-orange-500 hover:cursor-pointer hover:text-orange-300">DevTinder</span>
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
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>)}
</div>
  )
}

export default Navbar