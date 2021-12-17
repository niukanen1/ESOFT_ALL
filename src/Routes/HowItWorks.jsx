import { useQuery, gql } from "@apollo/client"
import Graph from '../componens/Graph';
const getUsers = gql`
    query getUsers { 
        getAllUsers {
            email, firstName, lastName, phone, hashedPassword
        }
    }
`

export default function HowItWorks() { 
    const {loading, error, data } = useQuery(getUsers)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:(</p>
    return ( 
        <div>
            {/* <h1>
                How it works???
            </h1>
            {
                data.getAllUsers.map(user => ( 
                    <div key={user.email}>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.hashedPassword}</li>
                    </div>
                ))
            } */}
            <Graph>
                
            </Graph>
        </div>
    )
}