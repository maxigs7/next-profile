import { ILocation } from './location';
import { ISocialProfile } from './social-profile';

export interface IProfile {
  email: string;
  firstName: string;
  image: string;
  label: string;
  lastName: string;
  location: ILocation;
  phone?: string;
  skype?: string;
  profiles: ISocialProfile[];
  summary?: string;
  url?: string;
}
