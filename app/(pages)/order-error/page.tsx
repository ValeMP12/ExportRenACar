import { Navbar } from '@/components/Shared/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function pageOrderError() {
    return (
        <div>
            <Navbar />
            <div className='p-6 mx-auto max-w-7xl'>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <h1 className='text-2xl'>
                ¡OPS! An error has ocurred. Try again later
                </h1>
                <Link href='/'>
                <Button>Re-see products</Button>
                </Link>
            </div>
            </div>           
        </div>
    )
}
