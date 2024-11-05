import NoteType from "@/types/noteType";
import { create } from "zustand";

type NotesStore = {
    notes: NoteType[];
    selectedNote: NoteType | null;
    setSelectedNote: (note?: NoteType) => void;
    setNotes: (notes: NoteType[]) => void;
}

const useNotesStore = create<NotesStore>((set) => ({
    notes: [],

    selectedNote: null,

    setSelectedNote: (note) => {
        set(() => ({
            selectedNote: note            
        }));
        console.log("Selected note:", note);
    },

    setNotes: (notes) =>
        set(() => ({
            notes: notes
        })),
}))

export default useNotesStore;