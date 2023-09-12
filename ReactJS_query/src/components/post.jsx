import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

const Post = (props) => {
    // eslint-disable-next-line react/prop-types
    const {el}=props;

    const posts=useRef(null)

    const queryClient=useQueryClient()
    
    // Deleting a post with useMutation and refreshing by invalidating query
    const deleteMutationPost=useMutation({
        mutationFn:async(id)=>{
          return fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
          })
        },
        onSuccess:()=>{
          queryClient.invalidateQueries(["posts"])
        }
      })



    // Updating a post with useMutation and refreshing by invalidating query  
    const updateMutationPost=useMutation({
        mutationFn:async(details)=>{
        const {title,id}=details
          return fetch(`http://localhost:3000/posts/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title})
          })
        },
        onSuccess:()=>{
          queryClient.invalidateQueries(["posts"])
        }
      })
  return (
    <div>
        <div >{el.title}</div> 
        <button onClick={()=>deleteMutationPost.mutate(el.id)}>delete</button>
        <input type="text" ref={posts} />
        <button onClick={()=>updateMutationPost.mutate({id:el.id,title:posts.current.value})}>update</button>
    </div>
  );
}

export default Post;
