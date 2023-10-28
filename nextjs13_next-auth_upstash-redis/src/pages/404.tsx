import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FourOhFour = () => {
    return (<>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full flex-col items-center max-w-md space-y-8">
                <div className="flex flex-col items-center gap-8">
                    <Image src="/favicon.png" alt="Logo" width={50} height={50} />
                    <h2 className="mt-6 text-center text-3x1 font-bold tracking-tight text-slate-300">
                        404 | This page could not be found.
                    </h2>
                </div>
                <Link href='/'>Go back home</Link>
            </div>
        </div>
    </>)
}

export default FourOhFour