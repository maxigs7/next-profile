import { ISocialProfile } from './social-profile';

export interface IProfile {
  city: string;
  country: string;
  email: string;
  firstName: string;
  image: string;
  lastName: string;
  phone?: string;
  skype?: string;
  profiles: ISocialProfile[];
  summary?: string;
  title: string;
  url?: string;
}
