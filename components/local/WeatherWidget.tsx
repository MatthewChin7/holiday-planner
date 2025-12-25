import { CloudRain, Sun, Cloud, Wind } from "lucide-react";
import { Card } from "../ui/Card";

export function WeatherWidget() {
    return (
        <Card className="bg-gradient-to-br from-sky-400 to-blue-500 text-white border-none shadow-lg">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-sky-100">Singapore</h3>
                    <div className="flex items-center gap-3 mt-1">
                        <Sun size={48} className="text-yellow-300 fill-yellow-300 animate-pulse" />
                        <div>
                            <span className="text-3xl font-bold">31°C</span>
                            <p className="text-sm text-sky-100">Feels like 36°C</p>
                        </div>
                    </div>
                </div>
                <div className="text-right text-sm space-y-1">
                    <div className="flex items-center justify-end gap-1"><CloudRain size={14} /> 40% Rain</div>
                    <div className="flex items-center justify-end gap-1"><Wind size={14} /> 12km/h</div>
                </div>
            </div>

            <div className="mt-6 flex justify-between text-center text-xs">
                <div>
                    <p className="opacity-70">Sat</p>
                    <CloudRain size={20} className="mx-auto my-1" />
                    <p>29°</p>
                </div>
                <div>
                    <p className="opacity-70">Sun</p>
                    <Sun size={20} className="mx-auto my-1" />
                    <p>32°</p>
                </div>
                <div>
                    <p className="opacity-70">Mon</p>
                    <Cloud size={20} className="mx-auto my-1" />
                    <p>30°</p>
                </div>
            </div>
        </Card>
    );
}
