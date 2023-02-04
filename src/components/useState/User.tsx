import React, { useState } from 'react'
import { UserModel } from '../../models/Users.model';

const User = () => {
    const [user, setUser] = useState<UserModel>();

    const login = () => {
        setUser({
            id: 1,
            createdAt: new Date(),
            name: 'juan',
            role: 'login'
        })
    }

    return (
        <section>
            <h2>Users-useState</h2>
            <button onClick={() => login()}>Log in</button>
            <div>{user ? JSON.stringify(user) : <p>Sin usuario</p>}</div>
        </section>
    )
}

export default User