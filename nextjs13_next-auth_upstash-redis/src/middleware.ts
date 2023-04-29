import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const noAuthRequired = ['/', '/login']

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        // Manage route protection
        const isAuth = await getToken({ req })
        const isAccessingSensitiveRoute = !noAuthRequired.includes(pathname)

        // Handle private routes
        if (!isAuth && isAccessingSensitiveRoute) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    },
    {
        callbacks: {
            // Workaround to handle redirect on auth pages to prevent infinite loops
            async authorized() {
                return true
            },
        },
    },
)