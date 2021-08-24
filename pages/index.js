
import React,{useEffect , useState} from 'react'
import Error from 'next/error'
import StoryList from '../components/StoryList'

const Index = () => {
  const [stories , setStories] = useState([])
  useEffect(() => {
    
      fetch('https://node-hnapi.herokuapp.com/news?page=1')
        .then(response => response.json())
        .then(data => setStories(data))

  },[])
  
  if(stories.length === 0 ){
    return <Error statusCode={503}/>
  }

  return (
    <div>
      <h1>hacker next</h1>
      <StoryList stories={stories}/>
    </div>
  )
}


export default Index
