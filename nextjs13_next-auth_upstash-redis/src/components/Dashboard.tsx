"use client"

import { getUserData, setUserData } from '@/lib/user/userData'
import { Session } from 'next-auth'
import React, { useEffect, useState } from 'react'

const Dashboard = ({ session }: { session: Session }) => {

    const [fetchedUserData, setFetchedUserData] = useState<UserData | undefined>(undefined);
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        console.log("CALLING GET USERNAME")
        if (session) {
            getUserData(session.user.id)
                .then((res) => {
                    setFetchedUserData(res)
                })
        }
    }, [session])

    const saveUsername = () => {
        console.log("CALLING GET USERNAME")
        setUserData(session.user.id, {username: username})
            .then((res) => {
                setFetchedUserData(res)
            })
      };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };

    return (<>
        <div>
            <h1>Your username is: {fetchedUserData?.username}</h1>
            <input
            type="text"
            placeholder="Enter new username"
            value={username}
            onChange={handleInputChange}
            />
            <button onClick={saveUsername}>Save Username</button>
        </div>
    </>)
}

export default Dashboard