import { Calendar, Car, Heart, SquareChartGantt } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Cars",
        href: "/dashboard"
    },

    {
        icon: Calendar,
        label: "Cars Reserves",
        href: "/reserves"
    },

    {
        icon: Heart,
        label: "Loved Cars",
        href: "/loved-cars",
    },
    
]

export const dataAdminSidebar = [
    {
        icon: SquareChartGantt,
        label: "Manage your cars",
        href: "/manage"
    },

    {
        icon: Calendar,
        label: "All Reserves",
        href: "/reserves"
    },
]