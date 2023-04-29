import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import SignOutButton from '../SignOutButton'
import Login from '@/components/ui/login'


const Sidebar = async () => {
    const session = await getServerSession(authOptions)

    return (
        <nav className="bg-gray-800 h-screen w-48 px-4 py-8 flex flex-col">
            <ul>
                {session ? (
                    <li className="mb-4 justify-items-end">
                        <Link href="/dashboard" className="text-white hover:text-gray-300">
                            Dashboard
                        </Link>
                    </li>
                ) : null}
                {session ? (
                    <li className="mb-4">
                        <Link href="/profile" className="text-white hover:text-gray-300">
                            Profile
                        </Link>
                    </li>
                ) : null}

            </ul>
            {!session ? (
                <Login />
            ) : null}
            {session ? (
                <ul className="mt-auto">
                    <li>
                        <SignOutButton className='max-w-sm mx-auto w-full' />
                    </li>
                </ul>
            ) : null}
        </nav>
    )
}

export default Sidebar