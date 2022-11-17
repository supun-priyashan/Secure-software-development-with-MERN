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

            {(isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {(isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}

            {(isAdmin || isManager) && <p><Link to="/dash/files/new">Add New File</Link></p>}

        </section>
    )

    return content
}
export default Welcome