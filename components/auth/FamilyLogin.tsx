"use client";

import { useUserStore, USERS } from "@/store/userStore";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function FamilyLogin() {
    const login = useUserStore((state) => state.login);
    const router = useRouter();

    const handleLogin = (user: typeof USERS[0]) => {
        login(user);
        router.push("/dashboard");
    };

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {USERS.map((user) => (
                <motion.div
                    key={user.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Card
                        onClick={() => handleLogin(user)}
                        className="cursor-pointer flex flex-col items-center justify-center p-6 gap-4 hover:ring-2 hover:ring-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${user.color} text-white shadow-lg`}>
                            {user.avatar}
                        </div>
                        <h3 className="font-heading font-semibold text-lg">{user.name}</h3>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
