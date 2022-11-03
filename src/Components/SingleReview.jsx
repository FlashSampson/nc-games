import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByID } from "../API"

export const SingleReview = ({singleReview})=>{
    
    const [isLoading, setIsLoading] =useState(true)
    const [review, setReview] = useState([])


const {review_id} = useParams()


useEffect(()=>{
    setIsLoading(true)
    fetchReviewsByID(review_id).then((review)=>{
        setReview(review)
        setIsLoading(false)
    })
},[] )

const {review_img_url, title, review_body, votes, designer} = review


return <section className="boxes">
    <h3>{title}</h3>
    <h4>by {designer}</h4>
    <img className="Review-picture" src={review_img_url} alt="review img" />
    <p>{review_body}</p>
    <h4>Votes : {votes}</h4>



</section>

}