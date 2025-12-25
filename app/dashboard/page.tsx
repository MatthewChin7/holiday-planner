"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { MapLayer } from "@/components/map/MapLayer";
import { Timeline } from "@/components/itinerary/Timeline";
import { Button } from "@/components/ui/Button";
import { Plus, Filter, Map, List, Search, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { EventModal } from "@/components/calendar/EventModal";
import { useUserStore } from "@/store/userStore";

// Mock Data
const INITIAL_EVENTS = [
    {
        id: "1",
        title: "Maths Tuition @ Novena",
        start: new Date(2025, 11, 27, 16, 0),
        end: new Date(2025, 11, 27, 18, 0),
        type: "TUITION",
        location: "Novena Square",
        notes: "Bring geometry set."
    },
    {
        id: "2",
        title: "Dinner with Kids",
        start: new Date(2025, 11, 27, 18, 30),
        end: new Date(2025, 11, 27, 20, 0),
        type: "LEISURE",
        location: "Velocity",
        notes: "Reservation at 6:30pm."
    },
    {
        id: "3",
        title: "Dad Late Meeting",
        start: new Date(2025, 11, 27, 21, 0),
        end: new Date(2025, 11, 27, 22, 0),
        type: "WORK",
        location: "CBD",
    },
];

export default function DashboardPage() {
    const { currentUser } = useUserStore();
    const [events, setEvents] = useState<any[]>(INITIAL_EVENTS);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveEvent = (newEvent: any) => {
        setEvents((prev) => [
            ...prev,
            { ...newEvent, id: Math.random().toString(), userId: currentUser?.id || 'u1' },
        ]);
        setIsModalOpen(false);
    };

    const handleAddSuggestion = (suggestionTitle: string) => {
        const newEvent = {
            id: Math.random().toString(),
            title: suggestionTitle,
            start: new Date(2025, 11, 28, 10, 0), // Default to Sunday 10am
            end: new Date(2025, 11, 28, 12, 0),
            type: "LEISURE",
            location: "Singapore",
            userId: currentUser?.id || 'u1',
        };
        setEvents(prev => [...prev, newEvent]);
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-white dark:bg-slate-950 flex font-sans text-slate-900 dark:text-slate-100">
            {/* Modal */}
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveEvent}
            />

            {/* Left Panel: Itinerary (60%) */}
            <div className="w-[60%] flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-10">
                {/* Header */}
                <div className="h-16 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0 text-muted-foreground"><ArrowLeft size={20} /></Button>
                        <div>
                            <h1 className="font-heading font-bold text-xl tracking-tight">Singapore Weekend</h1>
                            <p className="text-xs text-muted-foreground font-medium">Dec 27 - Dec 28 • 2 Guests</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full gap-2 text-xs font-semibold h-9" onClick={() => alert("Filters coming soon!")}><Filter size={14} /> Filter</Button>
                        <Button size="sm" className="rounded-full gap-2 text-xs font-semibold h-9 shadow-lg shadow-primary/20" onClick={() => setIsModalOpen(true)}><Plus size={16} /> New Plan</Button>
                    </div>
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    {/* Day Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold uppercase text-muted-foreground">SAT</span>
                            <span className="text-2xl font-bold font-heading">27</span>
                        </div>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1" />
                    </div>

                    <Timeline events={events} />

                    <div className="flex items-center gap-4 my-8">
                        <div className="flex flex-col items-center w-8 opacity-50">
                            <span className="text-xs font-bold uppercase text-muted-foreground">SUN</span>
                            <span className="text-2xl font-bold font-heading">28</span>
                        </div>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1" />
                    </div>

                    <div className="text-center py-12 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl">
                        <p className="text-muted-foreground text-sm">No plans for Sunday yet.</p>
                        <Button variant="link" className="text-primary font-semibold">Browse Suggestions</Button>
                    </div>
                </div>
            </div>

            {/* Right Panel: Map & Context (40%) */}
            <div className="w-[40%] flex flex-col bg-slate-50 dark:bg-slate-900">
                {/* Top: Map (55%) */}
                <div className="h-[55%] relative w-full border-b border-slate-200 dark:border-slate-800">
                    <MapLayer />
                    {/* Map Controls Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 shadow-lg"><Map size={18} /></Button>
                    </div>
                </div>

                {/* Bottom: Places / Discovery (45%) */}
                <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-slate-950">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                        <Search size={16} className="text-muted-foreground" />
                        <input
                            className="bg-transparent text-sm font-medium w-full outline-none placeholder:text-muted-foreground"
                            placeholder="Search places to add..."
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Nearby Gems</h3>
                        {/* Suggestion Items */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors cursor-pointer group">
                                <div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-800 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm">MacRitchie Reservoir</h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">Nature Park • 2.5km away</p>
                                    <div className="mt-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">High Vis</span>
                                    </div>
                                </div>
                                <Button size="sm" variant="ghost" className="ml-auto opacity-0 group-hover:opacity-100" onClick={(e) => { e.stopPropagation(); handleAddSuggestion("MacRitchie Reservoir"); }}><Plus size={16} /></Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
