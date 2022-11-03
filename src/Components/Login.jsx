import { BrowserRouter, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../API'
import UserCard from './UserCard'





export const Login = () => {
const [isLoading, setIsLoading] = useState(true)
const [users, setUsers] = useState([])


useEffect(()=>{
    setIsLoading(true)
    fetchUsers().then((users)=>{
        setUsers(users)
        setIsLoading(false)
    })
},[])

if (isLoading) return <h2>Loading...</h2>

return <section>
    <h2>Login</h2>
    <ul>
        
    {users.map(user => {
        
                return <li key={user.username}>   
                        {<Link to="/Reviews">
                        <UserCard givenUser={user}/>
                    </Link>}                   
                </li>
               
            })}
          
    </ul>
</section>

}
