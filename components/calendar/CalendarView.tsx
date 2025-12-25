"use client";

import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "../ui/Card";
import { useUserStore } from "@/store/userStore";
import { useState, useCallback } from "react";
import { EventModal } from "./EventModal";
import { Button } from "../ui/Button";
import { Plus } from "lucide-react";

// Setup Localizer
const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Mock Events for Demo
const MOCK_EVENTS = [
    {
        id: 1,
        title: "Maths Tuition @ Novena",
        start: new Date(2025, 11, 27, 16, 0), // Dec 27, 4pm
        end: new Date(2025, 11, 27, 18, 0),
        type: "TUITION",
        userId: "u3", // Kid 1
    },
    {
        id: 2,
        title: "Dad Late Meeting",
        start: new Date(2025, 11, 27, 19, 0),
        end: new Date(2025, 11, 27, 21, 0),
        type: "WORK",
        userId: "u1",
    },
    {
        id: 3,
        title: "School Concert",
        start: new Date(2025, 11, 28, 10, 0),
        end: new Date(2025, 11, 28, 13, 0),
        type: "SCHOOL",
        userId: "u4",
    },
];

export function CalendarView() {
    const { currentUser } = useUserStore();
    const [events, setEvents] = useState(MOCK_EVENTS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<Date | undefined>(undefined);

    const handleSelectSlot = useCallback(({ start }: { start: Date }) => {
        setSelectedSlot(start);
        setIsModalOpen(true);
    }, []);

    const handleSaveEvent = (newEvent: any) => {
        setEvents((prev) => [
            ...prev,
            { ...newEvent, id: Math.random(), userId: currentUser?.id || 'u1' },
        ]);
    };

    // Custom styling for events
    const eventStyleGetter = (event: any) => {
        let backgroundColor = "#3b82f6"; // Default blue
        if (event.userId === 'u1') backgroundColor = '#2563eb'; // Dad
        if (event.userId === 'u2') backgroundColor = '#e11d48'; // Mom
        if (event.userId === 'u3') backgroundColor = '#10b981'; // Kid1
        if (event.userId === 'u4') backgroundColor = '#f59e0b'; // Kid2

        return {
            style: {
                backgroundColor,
                borderRadius: "6px",
                border: "none",
                color: "white",
                fontSize: "0.85rem",
            },
        };
    };

    return (
        <Card className="h-[75vh] p-0 overflow-hidden shadow-sm border-none">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold font-heading">Family Schedule</h2>
                    <Button size="sm" onClick={() => setIsModalOpen(true)} className="gap-2">
                        <Plus size={16} /> Add Event
                    </Button>
                </div>

                {/* Legend */}
                <div className="flex gap-3 text-xs">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-600" /> Dad</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500" /> Mom</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Kid 1</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> Kid 2</span>
                </div>
            </div>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100% - 60px)' }}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}
                defaultView={Views.WEEK}
                eventPropGetter={eventStyleGetter}
                selectable
                onSelectSlot={handleSelectSlot}
            />

            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveEvent}
                selectedDate={selectedSlot}
            />
        </Card>
    );
}
