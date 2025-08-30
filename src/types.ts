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
  createdAt: number; // Timestamp when video was created
  boostWindowEnd: number; // Timestamp when boosting window closes
  lockPeriodEnd: number; // Timestamp when lock period ends
  claimPeriodEnd: number; // Timestamp when claim period ends
  phase: 'boosting' | 'locked' | 'claiming' | 'closed'; // Current video phase
  qualityScore?: number; // Final quality score multiplier
  finalPrizePool?: number; // Final calculated prize pool
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

// Phase management functions
export const getVideoPhase = (video: Video): 'boosting' | 'locked' | 'claiming' | 'closed' => {
  const now = Date.now();
  
  if (now < video.boostWindowEnd) {
    return 'boosting';
  } else if (now < video.lockPeriodEnd) {
    return 'locked';
  } else if (now < video.claimPeriodEnd) {
    return 'claiming';
  } else {
    return 'closed';
  }
};

export const getTimeRemaining = (timestamp: number): string => {
  const now = Date.now();
  const diff = timestamp - now;
  
  if (diff <= 0) return 'Expired';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export const calculateQualityScore = (video: Video): number => {
  const engagementRate = video.engagementScore / 100;
  const boostParticipation = Math.min(video.totalBoosts / 100, 1); // Normalize boost count
  const viralityScore = Math.min(video.shares / 1000, 1); // High share rate = viral
  
  // Quality score is weighted combination (1.0 to 2.5 multiplier)
  return 1.0 + (engagementRate * 0.5) + (boostParticipation * 0.3) + (viralityScore * 0.7);
};

export const calculateFinalPrizePool = (video: Video): number => {
  const qualityScore = calculateQualityScore(video);
  return video.boostPool * qualityScore;
};

// Create a new video with proper timing
export const createVideoWithTiming = (baseVideo: Omit<Video, 'createdAt' | 'boostWindowEnd' | 'lockPeriodEnd' | 'claimPeriodEnd' | 'phase'>): Video => {
  const createdAt = Date.now();
  const boostWindowHours = 24; // 1 day for boosting
  const lockPeriodHours = 24;  // 24 hours for lock period
  const claimPeriodHours = 168; // 7 days for claiming
  
  return {
    ...baseVideo,
    createdAt,
    boostWindowEnd: createdAt + (boostWindowHours * 60 * 60 * 1000),
    lockPeriodEnd: createdAt + ((boostWindowHours + lockPeriodHours) * 60 * 60 * 1000),
    claimPeriodEnd: createdAt + ((boostWindowHours + lockPeriodHours + claimPeriodHours) * 60 * 60 * 1000),
    phase: 'boosting'
  };
};

// Calculate potential reward based on engagement performance
export const calculateReward = (boost: Boost, video: Video): number => {
  const baseReward = boost.amount;
  const engagementMultiplier = video.engagementScore / 50; // 50 is the "break-even" score
  return Math.floor(baseReward * engagementMultiplier);
};
