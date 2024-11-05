import NoteType from "@/types/noteType";
import realmInstance, { NoteSchema } from "./realmConfig";
import Realm from "realm";
import useNotesStore from "@/stores/noteStore";

export const getAllNotes = (): NoteType[] => {
    const notes = realmInstance.objects<NoteSchema>("Note");
    return notes.map(note => ({
        _id: note._id,
        title: note.title,
        content: note.content,
        lastEdited: note.lastEdited,
        favorite: note.favorite,
        pinned: note.pinned,
        locked: note.locked,
        tags: note.tags,
        color: note.color
    }))
}

export const addNote = (
    title: string,
    content: string,
) => {
    realmInstance.write(() => {
        realmInstance.create("Note", {
            _id: new Realm.BSON.ObjectId(),
            title,
            content,
            lastEdited: new Date(),
            favorite: false,
            pinned: false,
            locked: false,
            tags: [],
            color: ""
        });
    });
    console.log("Note added successfully")
};


export const updateNote = (
    noteId: Realm.BSON.ObjectId, 
    updates: Partial<Omit<NoteSchema, "_id">>
) => {
    realmInstance.write(() => {
        const note = realmInstance.objectForPrimaryKey("Note", noteId);

        if (note) {
            Object.keys(updates).forEach((key) => {
                (note as any)[key] = updates[key as keyof Partial<Omit<NoteSchema, "_id">>];
            });

            note.lastEdited = new Date();
        };
    });
};


export const deleteNote = (
    noteId: Realm.BSON.ObjectId
) => {
    realmInstance.write(() => {
        const note = realmInstance.objectForPrimaryKey("Note", noteId);

        if (note) {
            realmInstance.delete(note);
            alert("Note deleted successfully.");
        }

        const { setSelectedNote, setNotes } = useNotesStore.getState();
        setSelectedNote(undefined);
        setNotes(getAllNotes());
    })
}