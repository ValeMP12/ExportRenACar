'use client';
import React from 'react'
import { useLovedCars } from '@/hooks/use-loved-cars';
import { Car } from '@prisma/client';
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react'
import Image from 'next/image';
import { ModalAddReservationProps } from '@/components/Shared/ModalAddReservation/ModalAddReservation.type';
import ModalAddReservation from '@/components/Shared/ModalAddReservation/ModalAddReservation';

export function ListLovedCars() {
    const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();
    return (
        <>
            {lovedItems.length === 0 ? (
                <h2>You still don't have cars that you like </h2>
            ) : (
                <div className='grid grid-cols-2 gap-3 lg:grid-cols-4'>
                    {lovedItems.map((car: Car) => {
                        const { id, priceDay, photo, cv, engine, name, transmission, type, people } = car;

                        return (
                            <div className='p-1 rounded-lg shadow-md hover:shadow-lg' key={id}>
                                <Image src={photo} alt={name} width={400} height={600} />
                                <div className='p-3'>
                                    <div className='flex flex-col mb-3 gap-x-4'>
                                        <p className='text-xl min-h-16 lg:min-h-fit'>{name}</p>
                                        <p>${priceDay} /day </p>
                                    </div>
                                    <p className='flex items-center'>
                                        <Gem className='w-4 h-4 mr-2' strokeWidth={1} />
                                        {type}
                                    </p>
                                    <p className='flex items-center'>
                                        <Gauge className='w-4 h-4 mr-2' strokeWidth={1} />
                                        {cv} CV
                                    </p>
                                    <p className='flex items-center'>
                                        <Wrench className='w-4 h-4 mr-2' strokeWidth={1} />
                                        {transmission}
                                    </p>
                                    <p className='flex items-center'>
                                        <Users className='w-4 h-4 mr-2' strokeWidth={1} />
                                        {people}
                                    </p>
                                    <p className='flex items-center'>
                                        <Fuel className='w-4 h-4 mr-2' strokeWidth={1} />
                                        {engine}
                                    </p>
                                    <div className='flex items-center justify-center gap-x-3'>
                                        <ModalAddReservation car={car} />
                                        <Heart className={`mt-2 cursor-pointer ${lovedItems.some((item) => item.id === id) && 'fill-black'}`} onClick={lovedItems.some((item) => item.id === id) ? () => removeLovedItem(car.id) : () => addLovedItem(car)} />
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}
