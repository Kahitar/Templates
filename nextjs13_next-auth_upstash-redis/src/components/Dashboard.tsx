"use client"

import { Session } from 'next-auth'
import React from 'react'

const Dashboard = ({ session }: { session: Session }) => {

    return (<>
        Hello Dashboard
    </>)
}

export default Dashboard