// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"

const POSTS=[
  {id:1,title:"Post 1"},
  {id:2,title:"Post 2"}
]
const wait=(duration)=>new Promise(res=>setTimeout(res,duration))

function App() {
  // const [count, setCount] = useState(0)
  const queryClient=useQueryClient()
  const postQuery=useQuery({
    queryKey:["posts"],
    // /posts
    // /posts/1
    // /posts?authorId=1
    // /posts/2/comments
    queryFn:(obj)=>wait(1000).then(()=>{
      console.log(obj)
      return [...POSTS]
    } 
    )
    
  })
  const newMutationPosts=useMutation({
    mutationFn:title=>{
      return wait(1000).then(()=>POSTS.push({id:crypto.randomUUID(),title}))
    },
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
        
      {postQuery.data.map((el)=>
        <div key={el.id}>{el.title}</div>
      )}
      </div>
      <button
      disabled={newMutationPosts.isLoading}
      onClick={()=>newMutationPosts.mutate("New Posts")}
      >
        Add New
      </button>
    </>
  )
}

export default App
