import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singlepost from '../Components/Singlepost';

function HomePage() {
  const [posts,setPosts] = useState([]);
  const [users,setUsers] = useState([]);
  const [comments,setComments] = useState([]);
  useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const {data} = res;
      data.sort((a, b) => b.id - a.id);
      setPosts(data); 
    })
  
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {setComments(res.data);})

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data);})
  
    
  },[])

  return (
    <div className='flex flex-col gap-4 items-center my-8 font-custom'>
    {
      posts.map(
        post => <Singlepost post = {post} users = {users} comments = {comments}></Singlepost>
      )
    }
    </div>
  )
}

export default HomePage