"use client";

import { Modal } from "../ui/Modal";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (eventData: any) => void;
    selectedDate?: Date;
}

export function EventModal({ isOpen, onClose, onSave, selectedDate }: EventModalProps) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState<"WORK" | "SCHOOL" | "TUITION" | "LEISURE">("LEISURE");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            title,
            location,
            type,
            start: selectedDate || new Date(),
            end: new Date((selectedDate || new Date()).getTime() + 60 * 60 * 1000), // Default 1 hour
        });
        onClose();
        // Reset form
        setTitle("");
        setLocation("");
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Event">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-sm font-medium mb-1 block">Event Name</label>
                    <Input
                        autoFocus
                        placeholder="e.g. Maths Tuition"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-1 block">Type</label>
                        <select
                            className="flex h-11 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                            value={type}
                            onChange={(e) => setType(e.target.value as any)}
                        >
                            <option value="LEISURE">Leisure (Fun)</option>
                            <option value="SCHOOL">School</option>
                            <option value="TUITION">Tuition</option>
                            <option value="WORK">Work</option>
                        </select>
                    </div>
                    <div>
                        {/* Placeholder for real Google Places */}
                        <label className="text-sm font-medium mb-1 block flex items-center gap-1"><MapPin size={14} /> Location</label>
                        <Input
                            placeholder="Search places..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>

                <div className="pt-4 flex justify-end gap-2">
                    <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button type="submit">Save Event</Button>
                </div>
            </form>
        </Modal>
    );
}
