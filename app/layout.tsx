'use client'

import './globals.css'

import { Inter } from 'next/font/google'

import { Provider } from 'react-redux'
import store from './store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="bg-gradient-to-t from-white via-slate-200 to-white">
                    <Provider store={store}>{children}</Provider>
                </main>
            </body>
        </html>
    )
}
