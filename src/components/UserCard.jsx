import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/userFeedSlice";


const UserCard=({user})=>{
    const {_id,firstName,lastName,imageUrl,bio,age,gender,skills}=user
    const dispatch=useDispatch()
    const handleSendRequest=async(status,userId)=>{
      try{
        // eslint-disable-next-line no-unused-vars
        const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true})
        dispatch(removeUserFromFeed(userId))
      }
      catch(err){
        console.log(err)
      }
    }

    return(
          user&&(<div className="card bg-base-300 w-96 shadow-sm mb-2">
          <figure>
          <img
           src={imageUrl}
           alt="image" />
          </figure>
        <div className="card-body">
           <h2 className="card-title">{firstName +" " + lastName}</h2>
           {age&&gender&&<p>{age +", "+gender}</p>}
           <p>{bio}</p>
           {skills&&<p>skills: {skills}</p>}
          <div className="card-actions justify-center my-2">
           <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
           <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
          </div>
        </div>
    </div>)
    )
};

export default UserCard