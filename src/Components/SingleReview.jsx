import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByID} from "../API"
import { Voter } from "./Voter"
import { CommentCard } from "./CommentCard"

export const SingleReview = ()=>{
    
    const [isLoading, setIsLoading] =useState(true)
    const [review, setReview] = useState([])
    
    const {review_img_url, title, review_body, votes, designer} = review

const {review_id} = useParams()


useEffect(()=>{
    setIsLoading(true)
    fetchReviewsByID(review_id).then((review)=>{
        setIsLoading(false)
        setReview(review)
    })
},[] ) 

      if (isLoading) return <h2>Loading...</h2>

return <section className="boxes">
    <h3>{title}</h3>
    <h4>by {designer}</h4>
    <img className="Review-picture" src={review_img_url} alt="review img" />
    <p>{review_body}</p>
  <Voter votes={votes}/>
  <CommentCard/>
</section>

}