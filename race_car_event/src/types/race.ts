export interface Race {
    id?: string;
    name: string;
    description: string;
    date: string;
    longitude: string;
    latitude: string;
    owner_id: number;
    members: number[];
}
