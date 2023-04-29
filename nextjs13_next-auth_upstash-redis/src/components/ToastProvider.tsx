'use client'

import React, { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProviderProps {
    children: ReactNode
}

const ToastProvider: FC<ProviderProps> = ({ children }) => {
    return (
        <>
            <Toaster position='bottom-right' reverseOrder={false} />
            {children}
        </>
    )
}

export default ToastProvider