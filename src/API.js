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
    return ncGamesAPI.get('/reviews')
    .then(({data})=>{
        return data
    })
}

export const fetchReviewsByCategory = () =>{
    // return ncGamesAPI.get(`/reviews?${category}`)
    // .then(({data})=>{
    //     console.log(data)
    //     return data
    // })

}

