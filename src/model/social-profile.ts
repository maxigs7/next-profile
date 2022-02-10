export type SocialNetwork = 'discord' | 'facebook' | 'instagram' | 'linkedin' | 'skype' | 'twitter';

export interface ISocialProfile {
  network: SocialNetwork;
  username: string;
  url: string;
}
