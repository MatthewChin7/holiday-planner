"use client";

import { Card } from "../ui/Card";
import { Check, Star, MapPin } from "lucide-react";
import { Button } from "../ui/Button";

const SUGGESTIONS = [
    {
        id: 1,
        title: "MacRitchie Treetop Walk",
        tag: "Nature | Active",
        desc: "Good for Saturday morning. Weather is clear.",
        image: "bg-emerald-100 dark:bg-emerald-900",
    },
    {
        id: 2,
        title: "National Gallery Promo",
        tag: "Culture | Chill",
        desc: "New exhibition starts this week. Perfect for Sunday aft.",
        image: "bg-rose-100 dark:bg-rose-900",
    },
    {
        id: 3,
        title: "East Coast Park Cycling",
        tag: "Family | Outdoor",
        desc: "Rent bikes at Coastline Leisure. High tide at 4pm.",
        image: "bg-amber-100 dark:bg-amber-900",
    },
];

export function SuggestionDeck() {
    return (
        <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                Intentional Weekend Ideas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SUGGESTIONS.map((s) => (
                    <Card key={s.id} className="relative overflow-hidden hover:shadow-lg transition-all group">
                        <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 ${s.image}`} />
                        <div className="mb-3">
                            <span className="text-xs font-bold text-primary px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md uppercase tracking-wide">{s.tag}</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-1">{s.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>

                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="w-full text-xs">More Info</Button>
                            <Button size="sm" className="w-full text-xs gap-1"><Check size={14} /> Plan It</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
