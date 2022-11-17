import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`ABC company: ${username}`)

    const content = (
        <section className="welcome" style={{textAlign: 'center'}}>

            <h1>Welcome {username}!</h1>

            <p><Link to="/dash/notes">View messages</Link></p>

            <p><Link to="/dash/notes/new">Add New message</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}

        </section>
    )

    return content
}
export default Welcome