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
        console.log("reserve car");
    }
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

