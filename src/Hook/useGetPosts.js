import { useEffect, useState } from 'react'
import getData from '../getData'

const useGetPosts = () => {
    
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
  
 
    useEffect(() => {
      const get_posts = ()=> {
            // We use the getData function to get the data from the API
            // and then store them in the state;
            getData().then(({data})=>{
                setPosts(data)
            // when the data is loaded set the isLoading state to false;
                setIsLoading(false)    
            })
            .catch(err=>console.log(err))
      }
     
      get_posts();
      
    
      return () => get_posts();

    }, [])

   
  return [posts, isLoading];

}

export default useGetPosts