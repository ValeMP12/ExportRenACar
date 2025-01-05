import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/hooks/use-toast';
import { Car } from '@prisma/client';

interface UseLovedCarsType {
    lovedItems: Car[],
    addLovedItem: (data: Car) => void,
    removeLovedItem: (id: string) => void,
}

export const useLovedCars = create(
    persist<UseLovedCarsType>(
        (set, get) => ({
            lovedItems: [],
            addLovedItem: (data: Car) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id === data.id);
            
            if(existingItem) {
                return toast({
                    title: 'Car already added',
                });
            }
            set({
                lovedItems: [...get().lovedItems, data],
            });

            toast({
                title: 'Car added to loved list',
            });
        
        },
        removeLovedItem: (id: string) => {
            set({
                lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
            });

            toast({
                title: 'Car removed from loved list',
            });
        },
    }),
    {
        name: 'loved-products-storage',
        storage: createJSONStorage(() => localStorage),
    }
))
