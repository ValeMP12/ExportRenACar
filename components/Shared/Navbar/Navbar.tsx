'use client';
import React from 'react'
import { useAuth, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const { userId } = useAuth();
    return (
        <div className='max-w-5xl py-5 mx-auto'>
            <div className='justify-between lg:flex '>
                <Link href='/' className='flex items-center justify-center font-extrabold gap-3'>
                    <Image src={'/coche-trasero.svg'} alt='Export Rent' width={50} height={50}/>
                    Export Rent A Car
                </Link>

                <div className='flex items-center justify-center gap-x-5'>
                    <Link href='/cars'>List Cars</Link>
                    <Link href='/dashboard'>Dashboard</Link>
                    {userId ? (
                        <>
                        <Link href='loved-cars'>
                        <Heart strokeWidth={1} className={'cursor-pointer'} />
                        </Link>
                        <UserButton />
                        </>) : (
                            <Link href='/sign-in' className='flex gap-x-3' >
                                <Button>Sign In <User className='ml-2 w-4 h-4' /></Button>
                            </Link>
                        )}
                </div>

            </div>

        </div>
    )
}
