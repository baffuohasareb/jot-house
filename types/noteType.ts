import Realm from "realm"

type NoteType = {
    _id: Realm.BSON.ObjectId;
    title: string;
    content: string;
    pinned: boolean;
    favorite: boolean;
    color?: string;
    tags?: string[];
    locked: boolean;
    lastEdited: Date;
}

export default NoteType