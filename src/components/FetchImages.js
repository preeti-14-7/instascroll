import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from "./Loader";
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NewsFeed from './NewsFeed';
// import '../style/fetchimage.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    overflow-x: hidden;
  }
  body{
    font-family : sans-sarif
    
  }
  `;

const NewImage = styled.section`
      display :flex;
      justify-content:center;
      align-items:center;
      max-width: 70rem;
      flex-direction: column;
      border-radius: 5px;
      margin: 8rem;
      overflow-x: hidden;
     
  `;


function FetchImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();

  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";

    axios
          .get(`${apiRoot}/photos/random?client_id=KZDG9OI-frnvRdxrNqCbfIqW4wyXfY_ihiqADAU8irY&count=10`)
      .then(res => setImages([...images, ...res.data]))

  }
  return (
    <>
      <GlobalStyle />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
    
        <NewImage>
          {images?.map(image => (
            <NewsFeed
              url={image.urls.thumb} key={image.id}
              user={image.user.id}
              location={image.location.country}
              likes={image.likes}
              views={image.views}
            />
          ))}
        </NewImage>
      </InfiniteScroll>
    </>
  )
}

export default FetchImages