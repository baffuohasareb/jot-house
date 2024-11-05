import Realm from "realm";

class NoteSchema extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    title!: string;
    content!: string;
    lastEdited!: Date;
    favorite!: boolean;
    pinned!: boolean;
    locked!: boolean;
    tags!: string[];
    color!: string;

    static schema = {
        name: "Note",
        primaryKey: "_id",
        properties: {
            _id: "objectId",
            title: "string",
            content: "string",
            lastEdited: "date",
            favorite: "bool",
            pinned: "bool",
            locked: 'bool',
            tags: "string[]",
            color: "string"
        }
    }
}


class FolderSchema extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    notes!: Realm.List<NoteSchema>;
    subfolders!: Realm.List<FolderSchema>;

    static schema = {
        name: "Folder",
        primaryKey: "_id",
        properties: {
            _id: "objectId",
            name: "string",
            notes: "Note[]",
            subfolders: "Folder[]"
        }
    }
}

const realmInstance = new Realm({ schema: [NoteSchema, FolderSchema] });

export default realmInstance;
export { NoteSchema, FolderSchema };
