import realmInstance from "./realmConfig";
import Realm from "realm";

export const addFolder = (name: string) => {
    realmInstance.write(() => {
        realmInstance.create("Folder", {
            _id: new Realm.BSON.ObjectId(),
            name,
            notes: [],
            subfolders: []
        })
    })
}