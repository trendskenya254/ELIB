import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'ELIB — Learn beyond the classroom', description: 'A modern digital learning library for ambitious learners.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
