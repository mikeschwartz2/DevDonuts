export interface Donuts {
    results: Donut[];
}

export interface Donut {
    id: number;
    ref: string;
    name: string;
    calories: number;
    extras: string[];
    photo: string;
    photo_attribution: string;
}

