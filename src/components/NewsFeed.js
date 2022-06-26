import '../style/newsfeed.css'
import styled from 'styled-components'
import Like from '../images/like.png'
import Views from '../images/views.png'
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:15px;
  overflow-x:hidden
  margin:5px;`;
const Detail = styled.div`
  display : flex;
  justify-content:space-evenly;
  align-items:center;
  flex-wrap:wrap;
  text-align:center;
  button{
    cursor: pointer;
  }
  margin-bottom:10px
`;  
const Post = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
    width:580px;
`;
//
 const NewsFeed = ({url,user,location,city,likes,views}) => {
 
   
   return (
 
  
     <Post>
       
       <Img src = {url}  alt="" /> 
       
       <Detail>
       <h2>User: {user}</h2>  
       <p>Location :{location}, {city}</p>
       <p><button><img  src = {Like} alt = "like"/>  </button> {likes}</p>
       <p><button><img  src = {Views} alt = "like"/> </button> {views}</p>

       </Detail>
       
     </Post>
    
   )
}
export default NewsFeed ;