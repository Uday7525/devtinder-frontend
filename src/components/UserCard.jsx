

const UserCard=({user})=>{
    const {firstName,lastName,imageUrl,bio,age,gender,skills}=user
    
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
           <button className="btn btn-primary">Ignore</button>
           <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
    </div>)
    )
};

export default UserCard