import "../style/profile.css"
import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import FetchImages from "./FetchImages";


function Profile() {

  const [user, setUsers] = useState();

  useEffect(() => {
    UserDetail();
  }, [])

  const UserDetail = () => {
    const apiRoot = "https://api.unsplash.com";

    axios
     .get(`${apiRoot}/users/random?client_id=KZDG9OI-frnvRdxrNqCbfIqW4wyXfY_ihiqADAU8irY`)
      .then(res => (setUsers([res.data])))

  }


//  console.log(user)

  return (
    <div className="profileIcon">

      {user?.map(users => (
        <div key={users.id} className="mapUser">
          <div className="top">
            <div ><img class="userIconImage" src={users.profile_image.medium} alt="userIcon" />
            </div>
            <div className="info">
              <div className="info-1">
                <p>User_Id: {users.instagram_username} </p>
                <button class="edit">Edit Profile</button>
              </div>
              <div className="count">
                <p><span> {users.followers_count}</span> Follwers </p>
                <p><span>{users.following_count} </span> Following</p>
                <p><span>{users.total_photos}</span>Total Post </p>
              </div>
              <p>User Name: {users.name} </p>
              {
                users.bio ? 
                <p>About: {users.bio}</p>
                :<p>About : Unkown</p>
              }
            </div>
          </div>

          <div className="posts">
            <FetchImages />
          </div>
        </div>
      ))}
    </div>
  )
}





export default Profile;