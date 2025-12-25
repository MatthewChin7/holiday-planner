"use client";

import { MapPin } from "lucide-react";

export function MapLayer() {
    return (
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 pointer-events-auto">
            {/* Mock Map Tiles */}
            <div className="w-full h-full opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Map_of_Singapore_Standard_Singapor_City_Map.jpg')] bg-cover bg-center grayscale contrast-75" />

            {/* Mock Markers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative group cursor-pointer">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500/20 blur-sm rounded-full" />
                    <MapPin className="text-blue-600 drop-shadow-lg relative z-10 hover:scale-110 transition-transform" size={40} fill="currentColor" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Novena Tuition Center
                    </div>
                </div>
            </div>

            <div className="absolute top-1/3 left-1/3">
                <div className="relative group cursor-pointer">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-500/20 blur-sm rounded-full" />
                    <MapPin className="text-rose-600 drop-shadow-lg relative z-10 hover:scale-110 transition-transform" size={40} fill="currentColor" />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Mom's Office
                    </div>
                </div>
            </div>
        </div>
    );
}
