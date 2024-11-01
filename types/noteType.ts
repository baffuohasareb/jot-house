type NoteType = {
    id: number;
    title: string;
    body: string;
    pinned: boolean;
    favorite: boolean;
    color?: string;
    tags?: string[];
    locked: boolean;
    lastUpdated: string;
}

export default NoteType