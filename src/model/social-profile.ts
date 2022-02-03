type SocialNetwork = 'facebook' | 'instagram' | 'linkedin' | 'twitter';

export interface ISocialProfile {
  network: SocialNetwork;
  username: string;
  url: string;
}
