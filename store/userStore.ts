
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserType = 'DAD' | 'MOM' | 'KID1' | 'KID2';

interface UserProfile {
    id: string;
    name: string;
    role: UserType;
    color: string; // Tailwind class like 'bg-blue-500'
    avatar: string;
}

interface UserState {
    currentUser: UserProfile | null;
    login: (user: UserProfile) => void;
    logout: () => void;
}

export const USERS: UserProfile[] = [
    { id: 'u1', name: 'Dad', role: 'DAD', color: 'bg-blue-600', avatar: '👨🏻' },
    { id: 'u2', name: 'Mom', role: 'MOM', color: 'bg-rose-500', avatar: '👩🏻' },
    { id: 'u3', name: 'Kid 1', role: 'KID1', color: 'bg-emerald-500', avatar: '👦🏻' },
    { id: 'u4', name: 'Kid 2', role: 'KID2', color: 'bg-amber-500', avatar: '👧🏻' },
];

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            currentUser: null,
            login: (user) => set({ currentUser: user }),
            logout: () => set({ currentUser: null }),
        }),
        {
            name: 'chin-family-storage',
        }
    )
);
