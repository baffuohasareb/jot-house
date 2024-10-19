import NoteType from "@/types/noteType";
import { create } from "zustand";

type NotesStore = {
    notes: NoteType[];
    selectedNote: NoteType | null;
    setSelectedNote: (note: NoteType) => void;
    addNote: (note: NoteType) => void;
    // deleteNote: (id: number) => void;
    editNote: (id: number, title: string, body: string) => void;
    // pinNote: (id: number) => void;
    // addToFavorites: (id: number) => void;
    // setColor: (id: number) => void;
    // lockNote: (id: number) => void;
    // renameNote: (id: number) => void;
    // addTag: (id: number, tag: string) => void;
    // removeTag: (id: number, tag: string) => void;
}

const useNotesStore = create<NotesStore>((set) => ({
    notes: [],

    selectedNote: null,

    setSelectedNote: (note) => 
        set(() => ({
            selectedNote: note
        })),

    addNote: (note) =>
        set((state) => ({
            notes: [...state.notes, note]
        })),

    editNote: (id, title, body) => 
        set((state) => {
            const targetNote = state.notes.find((note) => note.id === id);

            if (targetNote) {
                targetNote.title = title;
                targetNote.body = body;
            }

            return state;
        })
}))

export default useNotesStore;