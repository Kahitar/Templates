import Dashboard from '@/components/Dashboard'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Index() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return (<><div className="error">Not Authorized.</div></>)
    }
    return (<>
        <Dashboard session={session} />
    </>)
}
