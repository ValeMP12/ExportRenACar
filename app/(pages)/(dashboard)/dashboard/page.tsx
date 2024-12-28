
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import React from 'react'
import { ListCars } from './components/ListCars';

export default async function DashboardPage() {
    const { userId } = await auth();
    if (!userId) {
        redirect('/');
    }

    const cars = await db.car.findMany({
        where: {
            isPublish: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return (
        <div>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Lista de coches</h2>
        </div>
        <ListCars cars= {cars} />
        </div>
    )
}
