import { Navbar } from '@/components/Shared/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function orderConfirmationPage() {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto p-6'>
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <h1 className='text-2xl'>!Thank you very much for trusting us!</h1>
                    <p>In a few moments you will receive all the information through an email</p>
                    <p>You can view all your reservation within your Client Area</p>
                    <Link href='/'>
                        <Button>Re-see products</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
