import { create } from 'zustand';

interface GameStore {
    artists: {name: string, image: string}[];
    setArtists: (artists: {name: string, image: string}[]) => void;
    score: number;
    setScore: (score: number) => void;
    timer: number;
    setTimer: (timer: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
    artists: [],
    setArtists: (artists) => set({ artists }),
    score: 0,
    setScore: (score) => set({ score }),
    timer: 0,
    setTimer: (timer) => set({ timer }),
}))