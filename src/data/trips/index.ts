import { hikingTrips } from './hiking';
import { bikingTrips } from './biking';
import { waterTrips } from './water';
import { viaFerrataTrips } from './via-ferrata';
import { Trip } from '../types/trip';

export const trips: Trip[] = [
  ...hikingTrips,
  ...bikingTrips,
  ...waterTrips,
  ...viaFerrataTrips
];