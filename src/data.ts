import type { Video, User } from './types.js';
import video1 from './assets/videos/video1.mp4';
import video2 from './assets/videos/video2.mp4';
import video3 from './assets/videos/video3.mp4';
import video4 from './assets/videos/video4.mp4';

export const videosData: Video[] = [
  {
    id: 1,
    url: video1,
    profilePic: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9d429ac49d6d18de6ebd2a3fb1f39269~c5_100x100.jpeg',
    username: 'csjackie',
    description: 'Lol nvm #compsci #chatgpt #ai #openai #techtok',
    song: 'Original sound - Famed Flames',
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
    views: 12500,
    totalBoosts: 3,
    boostPool: 150,
    engagementScore: 0, // Will be calculated
  },
  {
    id: 2,
    url: video2,
    profilePic: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eace3ee69abac57c39178451800db9d5~c5_100x100.jpeg',
    username: 'dailydotdev',
    description: 'Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes',
    song: 'tarawarolin wants you to know this isnt my sound - Chaplain J Rob',
    likes: 13400,
    comments: 3121,
    saves: 254,
    shares: 420,
    views: 89600,
    totalBoosts: 12,
    boostPool: 680,
    engagementScore: 0, // Will be calculated
  },
  {
    id: 3,
    url: video3,
    profilePic: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e6698b235eadcd5d989a665704daf68~c5_100x100.jpeg',
    username: 'wojciechtrefon',
    description: '#programming #softwareengineer #vscode #programmerhumor #programmingmemes',
    song: 'help so many people are using my sound - Ezra',
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
    views: 45200,
    totalBoosts: 7,
    boostPool: 320,
    engagementScore: 0, // Will be calculated
  },
  {
    id: 4,
    url: video4,
    profilePic: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4bda52cf3ad31c728153859262c329db~c5_100x100.jpeg',
    username: 'faruktutkus',
    description: 'Wait for the end | Im RTX 4090 TI | #softwareengineer #coding #codinglife #codingmemes',
    song: 'orijinal ses - Computer Science',
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 42,
    views: 67800,
    totalBoosts: 15,
    boostPool: 890,
    engagementScore: 0, // Will be calculated
  },
];

// Current user data (mock)
export const currentUser: User = {
  id: 'user123',
  username: 'Kenneth',
  coins: 500,
  totalEarned: 120,
  boosts: []
};
