import React, { useState } from 'react';
import { ModalAddReservationProps } from './ModalAddReservation.type';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import { Car } from '@prisma/client';
import { CalendarSelector } from './CalendarSelector';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';


export default function ModalAddReservation(props: ModalAddReservationProps) {
    const { car } = props;
    const [dateSelected, setDateSelected] = useState<{
        from: Date | undefined,
        to: Date | undefined
    }>({
        from: new Date(),
        to: addDays(new Date(), 5),
    })
    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        const response = await axios.post('/api/checkout', {
            carId: car.id,
            priceDay: car.priceDay,
            startDate: dateSelected.from,
            endDate: dateSelected.to,
            carName: car.name
        })
        window.location = response.data.url 
        toast({
            title: 'Car reserved'
        });
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='outline' className='w-full mt-3'>
                    Reserve vehicle
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>On what date do you want to book your car?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <CalendarSelector 
                        setDateSelected={setDateSelected}
                        carPriceDay={car.priceDay}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>Reserve Vehicle</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}

