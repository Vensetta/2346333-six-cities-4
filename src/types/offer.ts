import { City } from './location';
import { UserData } from './comment';

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    description: string;
    bedrooms: number;
    muxAdults: number;
    goods: string[];
    host: UserData;
    images: string[];
    isActive: boolean;
};

export type Offers = Offer[];
