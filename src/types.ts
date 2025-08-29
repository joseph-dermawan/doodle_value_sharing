export interface Video {
  id: number;
  url: string;
  profilePic: string;
  username: string;
  description: string;
  song: string;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  views: number;
  totalBoosts: number;
  boostPool: number; // Total coins invested in this video
  engagementScore: number; // Calculated engagement score
}

export interface Boost {
  id: string;
  videoId: number;
  userId: string;
  amount: number;
  timestamp: number;
  rewardEarned?: number;
}

export interface User {
  id: string;
  username: string;
  coins: number;
  totalEarned: number;
  boosts: Boost[];
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Calculate engagement score based on various metrics
export const calculateEngagementScore = (video: Video): number => {
  const weights = {
    likes: 0.3,
    comments: 0.25,
    shares: 0.2,
    saves: 0.15,
    views: 0.1
  };
  
  // Normalize metrics (assuming max values for scaling)
  const maxViews = 10000000; // 10M
  const maxLikes = 1000000;  // 1M
  const maxComments = 50000; // 50K
  const maxShares = 100000;  // 100K
  const maxSaves = 100000;   // 100K
  
  const normalizedScore = 
    (video.views / maxViews) * weights.views +
    (video.likes / maxLikes) * weights.likes +
    (video.comments / maxComments) * weights.comments +
    (video.shares / maxShares) * weights.shares +
    (video.saves / maxSaves) * weights.saves;
    
  return Math.min(normalizedScore * 100, 100); // Scale to 0-100
};

// Calculate potential reward based on engagement performance
export const calculateReward = (boost: Boost, video: Video): number => {
  const baseReward = boost.amount;
  const engagementMultiplier = video.engagementScore / 50; // 50 is the "break-even" score
  return Math.floor(baseReward * engagementMultiplier);
};
