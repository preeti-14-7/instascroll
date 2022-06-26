import React from 'react'
import '../style/navigation.css'
import {Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
function Navigation() {
  const [temp, setTemp] = useState();

  useEffect(() => {
    TempDetail();
  }, [])

  const TempDetail = () => {
    const apiRoot = "https://api.unsplash.com";

    axios
     .get(`${apiRoot}/users/random?client_id=KZDG9OI-frnvRdxrNqCbfIqW4wyXfY_ihiqADAU8irY`)
      .then(res => (setTemp([res.data])))

  }

  return (
    <div className="navigation">
  {
    temp?.map(users =>(
     <>
      <Link className = "test-link" to="/home"> <h1>Infinte Scroll App</h1></Link>
      <Link className = "test-link" to="/profile"><img  className= "iconProfile" src={users.profile_image.medium} alt="userIcon" />  <p>{users.name}</p></Link>
     </>
    ))
  }
        

    </div>
  )
}




export default Navigation