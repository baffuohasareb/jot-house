type NoteType = {
    title: string;
    body: string;
    pinned: boolean;
    favorite: boolean;
    color?: string;
    tags?: string[];
    locked: boolean;
    lastUpdated: string;
    onPress: () => void;
}

export default NoteType