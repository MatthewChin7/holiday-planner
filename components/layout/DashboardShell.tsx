"use client";

import { useUserStore } from "@/store/userStore";
import { useRouter, usePathname } from "next/navigation";
import { Calendar, MapPin, Briefcase, Settings, LogOut, Menu } from "lucide-react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

interface DashboardShellProps {
    children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
    const { currentUser, logout } = useUserStore();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!currentUser) {
        if (typeof window !== "undefined") router.push("/");
        return null;
    }

    const NAV_ITEMS = [
        { label: "Calendar", href: "/dashboard", icon: Calendar },
        { label: "SG Weekender", href: "/local", icon: MapPin },
        { label: "Trips", href: "/trips", icon: Briefcase },
        { label: "Settings", href: "/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-primary">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">C</div>
                        <h1 className="font-heading font-bold text-xl tracking-tight hidden sm:block">Chin Planner</h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link key={item.href} href={item.href}>
                                    <div className={clsx(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                        isActive
                                            ? "bg-slate-100 dark:bg-slate-800 text-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    )}>
                                        {item.label}
                                    </div>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Profile & Actions */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <span className="hidden sm:block text-sm font-medium">{currentUser.name}</span>
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg ${currentUser.color} text-white shadow-sm ring-2 ring-white dark:ring-slate-900`}>
                                {currentUser.avatar}
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => { logout(); router.push('/') }} className="hidden sm:flex">
                            <LogOut size={16} />
                        </Button>

                        {/* Mobile Toggle */}
                        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <item.icon size={20} className="text-muted-foreground" />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                </Link>
                            ))}
                            <div className="px-4 py-3 text-red-500 flex items-center gap-3 cursor-pointer" onClick={() => { logout(); router.push('/') }}>
                                <LogOut size={20} />
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-7xl mx-auto"
                >
                    {children}
                </motion.div>
            </main>
        </div>
    );
}
