import axios from 'axios'

const ncGamesAPI = axios.create({
    baseURL: 'https://senet91.herokuapp.com/api'
})

export const fetchUsers = () =>{
    return ncGamesAPI.get('/users')
    .then(({data})=>{
        return data
    })
}


export const fetchReviews = () =>{
    return ncGamesAPI.get(`/reviews`)
    .then(({data})=>{
        return data
    })
}

export const fetchReviewsByCategory = (categoryname) =>{
    return ncGamesAPI.get(`/reviews?category=${categoryname}`)
    .then(({data})=>{
        return data
    })

}
//could refactor fetchReviews and fetch reviews by category into one function

export const fetchReviewsByID = (review_id) =>{
    return ncGamesAPI.get(`/reviews/${review_id}`)
    .then(({data})=>{
        return data
    })
}
