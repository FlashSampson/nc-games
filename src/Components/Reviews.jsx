import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchReviews, fetchReviewsByCategory, fetchReviewsByID } from '../API'
import ReviewCard from './ReviewCard'




export const Reviews = () =>{

    const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews] = useState([])


const {categoryname} = useParams() 


    useEffect(()=>{
        setIsLoading(true)
        if (categoryname === undefined){

            fetchReviews().then((reviews)=>{
                setReviews(reviews)
                setIsLoading(false)
            })
        
     } else {
            fetchReviewsByCategory(categoryname).then((reviews)=>{
                setReviews(reviews)
                setIsLoading(false)
            })
        }
    },[])
    
    if (isLoading) return <h2>Loading...</h2>

      
    return <section>
        <Link to={'/Reviews/Options'}>
        <h2>Review categories</h2>
        </Link>
        <ul className='lists'> 
        {reviews.map(review => {             
                    return <li key={review.review_id}>  
                     <ReviewCard Reviews={review}/>                                          
                    </li>                 
                })}
              
        </ul>
    </section>
    
    }

