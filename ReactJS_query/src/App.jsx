// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { useRef } from "react"
import Post from "./components/post"



function App() {
  // const [count, setCount] = useState(0)
  const queryClient=useQueryClient()
  const post=useRef(0)


  // Fetching the data using queryFn()
  const postQuery=useQuery({
    queryKey:["posts"],
    // types of querykeys that you can provide for differentiating between queries
    // /posts --> ["posts"]
    // /posts/1 --> ["posts",1]
    // /posts?authorId=1 --> ["posts",{authorId:1}]
    // /posts/2/comments --> ["posts",2,"comments"]
    queryFn:()=>fetch("http://localhost:3000/posts").then(res=>res.json())  ,
    staleTime:1000*2
  })


  // Mutating the data using useMutation() for posting a new Post then regenerating the query by using onSuccess() and invalidting previous data with the help of query
  const newMutationPosts=useMutation({
    mutationFn:(title)=>{
      return fetch("http://localhost:3000/posts",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({title})
    })},
    onSuccess:()=>{
    queryClient.invalidateQueries(["posts"])
  }
})


if(postQuery.isLoading) return <h1>...Loading</h1>
if(postQuery.isError) return  <p>{JSON.stringify(postQuery.error)}</p>
return (
  <>
      <h1>TanStack Query</h1>
        <div>
          {/* Mapping the data obtained from postQuery */}
          {postQuery.data.map((el)=>
          // Individual Posts 
            <Post key={el.id} el={el}/>
          )}
        </div>
        <input type="text" ref={post}/>
        <button
        disabled={newMutationPosts.isLoading}
        onClick={()=>newMutationPosts.mutate(post.current.value)}
        >
          Add New
        </button>
    </>
  )
}

export default App
