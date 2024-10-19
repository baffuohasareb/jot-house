import { create } from "zustand";

type homeScreenContentStore = {
    active: "All notes" | "Favorites" | "Locked" | "Tags" | "Pinned" | "Folders";
    setActive: (content: "All notes" | "Favorites" | "Locked" | "Tags" | "Pinned" | "Folders") => void;
}

const useHomeScreenContentStore = create<homeScreenContentStore>((set) => ({
    active: "All notes",

    setActive: (content) => 
        set(() => ({
            active: content
        }))
}))

export default useHomeScreenContentStore;