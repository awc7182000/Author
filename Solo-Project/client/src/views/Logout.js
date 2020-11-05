import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button'

const Logout = () => {
    const {logout} = useAuth0();
    return (
        <div>
            <Button variant="outline-danger" onClick={() => logout()}>Log out</Button>
        </div>
    )
}

export default Logout
