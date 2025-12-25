"use client";

import { useUserStore } from "@/store/userStore";
import { format } from "date-fns";
import { Clock, MapPin, MoreHorizontal } from "lucide-react";

interface TimelineProps {
    events: any[];
}

export function Timeline({ events }: TimelineProps) {
    return (
        <div className="space-y-3">
            {events.map((event, index) => (
                <div key={event.id} className="group flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all cursor-pointer">
                    {/* Time & Icon Column */}
                    <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{format(event.start, "HH:mm")}</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-lg">
                            {/* Dynamic Icon based on type */}
                            {event.type === 'TUITION' && '📚'}
                            {event.type === 'WORK' && '💼'}
                            {event.type === 'LEISURE' && '🎉'}
                        </div>
                        <div className="h-full w-px bg-slate-100 dark:bg-slate-800 group-last:hidden" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">{event.title}</h4>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors"><MoreHorizontal size={16} /></button>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                        </div>

                        {event.notes && (
                            <p className="text-xs text-slate-500 mt-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg inline-block">
                                {event.notes}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
