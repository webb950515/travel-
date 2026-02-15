export type Language = 'en' | 'zh';
export type FlightOrigin = 'TW' | 'SG';

export interface FlightInfo {
  type: 'Departure' | 'Return' | '去程' | '回程';
  flightNumber: string;
  date: string;
  time: string;
  airport: string;
  terminal: string;
}

export interface Accommodation {
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  mapUrl: string;
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  isImportant?: boolean;
  links?: {
    label: string;
    url: string;
    type: 'map' | 'food' | 'info';
  }[];
}

export interface DayPlan {
  day: string;
  date: string;
  weather: string;
  items: ItineraryItem[];
}

export interface GuideItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl?: string;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export enum Tab {
  PLAN = 'PLAN',
  GUIDE = 'GUIDE',
  WALLET = 'WALLET',
  LISTS = 'LISTS',
  INFO = 'INFO'
}

export interface AppData {
  nav: Record<Tab, string>;
  flights: Record<FlightOrigin, FlightInfo[]>;
  hotel: Accommodation;
  itinerary: DayPlan[];
  guides: GuideItem[];
  checklist: string[];
  info: {
    weather: { title: string; subtitle: string; url: string };
    emergency: { title: string; police: string; ambulance: string; office: string; officeName: string };
    rules: { title: string; items: string[] };
  };
}
