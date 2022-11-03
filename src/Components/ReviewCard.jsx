import { Link } from "react-router-dom"


const ReviewCard = ({Reviews}) =>{



    const {owner, review_id, 
        title, category, designer, 
        review_body, review_img_url, created_at, votes, comment_count} = Reviews


return (
    <div className="list">
        <Link to={`/reviews?category=${category}`} >
        <img className="Review-picture" src={review_img_url}/>
        <p>ID: {review_id}</p>
        </Link>
        <p>Username: {owner}</p>
            <p>Category: {category}</p>
        <p>{review_body}</p>
        

    </div>
    )
}

export default ReviewCard