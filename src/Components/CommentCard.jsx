import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchComments } from "../API"

export const CommentCard = () =>{

const [isLoading, setIsLoading] = useState(true)
const [comments, setComments] = useState([])
const [err, setErr] = useState(null);

const {review_id} = useParams()

    useEffect(()=>{
        setIsLoading(true)
        fetchComments(review_id).then((comments)=>{
                setIsLoading(false)
                setComments(comments)
        }).catch((err)=>{
            setIsLoading(false)
            setErr('No one has made a comment yet 😥');
        })
    },[])
    
    if (isLoading) return <h2>Loading...</h2>
    if (err) return <p>{err}</p>;


    return  <section>
        <h4>Comments: </h4>
            <ul className='lists'> 
        {comments.map(comment => {             
                    return <li key={comment.comment_id}>  
                     {comment.body}                                        
                    </li>                 
                })}          
        </ul>  
        </section>                 
}