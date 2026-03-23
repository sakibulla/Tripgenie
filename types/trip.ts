export interface Trip {
    _id?: string;
    id: number;
    title: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    description?: string;
    itinerary?: string[];
}