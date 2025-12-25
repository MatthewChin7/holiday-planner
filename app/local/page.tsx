import { DashboardShell } from "@/components/layout/DashboardShell";
import { WeatherWidget } from "@/components/local/WeatherWidget";
import { SuggestionDeck } from "@/components/local/SuggestionDeck";
import { Card } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

export default function LocalPage() {
    return (
        <DashboardShell>
            <div className="space-y-8">
                {/* Hero Section */}
                <section>
                    <div className="flex items-center gap-3 text-secondary mb-2">
                        <MapPin size={24} />
                        <span className="font-semibold tracking-wide uppercase text-sm">Local Mode</span>
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Singapore Weekender</h2>
                    <p className="text-muted-foreground mt-2 text-lg max-w-2xl">
                        Intentional planning for your home base. Discover hidden gems and optimize your family time without the travel fatigue.
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Context (Sticky) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-24 space-y-6">
                            <WeatherWidget />

                            <Card className="bg-slate-900 text-white border-none shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
                                {/* Abstract Decor */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                <h3 className="font-semibold mb-2 relative z-10">Use Family Vibe</h3>
                                <p className="text-sm opacity-80 mb-6 relative z-10 font-light">
                                    Based on your recent activity, the family is feeling <strong>Active</strong> but has <strong>Low Social Battery</strong>.
                                </p>

                                <div className="space-y-1 relative z-10">
                                    <div className="flex justify-between text-xs opacity-70">
                                        <span>Energy</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-400 w-[70%]" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Right Column: Planning */}
                    <div className="lg:col-span-8 space-y-10">
                        <SuggestionDeck />

                        <div>
                            <h3 className="font-heading font-semibold text-xl mb-4">Your Weekend Draft</h3>
                            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center text-muted-foreground bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                <p className="font-medium">Your canvas is empty.</p>
                                <p className="text-sm mt-1">Drag ideas here or click "+" on suggestions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
