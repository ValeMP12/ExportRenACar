import React from "react";
import { ListLovedCars } from "./components/ListLovedCars";

export default function pageLovedCar() {
    return (
        <div>
            <h1 className="text-2xl">Loved Cars</h1>
            <ListLovedCars />
        </div>
    )
}