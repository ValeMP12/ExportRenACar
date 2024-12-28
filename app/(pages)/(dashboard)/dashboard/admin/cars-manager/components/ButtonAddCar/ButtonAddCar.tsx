'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { FormAddCar } from '../FormAddCar';

export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Add new car
                    <PlusCircle className='ml-2' />
                </Button>   
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormAddCar setOpenDialog={setOpenDialog}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
