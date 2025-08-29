import { useState, useCallback, useEffect } from '@lynx-js/react';
import './App.css';
import { VideoCard } from './components/VideoCard.js';
import { TopNavbar } from './components/TopNavbar.js';
import { BottomNavbar } from './components/BottomNavbar.js';
import EngagementBar from './components/EngagementBar.js';
import CoinDisplay from './components/CoinDisplay.js';
import { videosData, currentUser } from './data.js';
import type { Video, User, Boost } from './types.js';
import { calculateEngagementScore, calculateReward } from './types.js';

export function App(props: {
  onRender?: () => void
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState<Video[]>(() => {
    // Calculate initial engagement scores
    return videosData.map(video => ({
      ...video,
      engagementScore: calculateEngagementScore(video)
    }));
  });
  const [user, setUser] = useState<User>(currentUser);

  useEffect(() => {
    console.info('TikTok Clone with Lynx initialized');
  }, []);
  
  props.onRender?.();

  const handleSwipeUp = useCallback(() => {
    'background only';
    setCurrentVideoIndex(prev => 
      prev < videos.length - 1 ? prev + 1 : prev
    );
  }, [videos.length]);

  const handleSwipeDown = useCallback(() => {
    'background only';
    setCurrentVideoIndex(prev => 
      prev > 0 ? prev - 1 : prev
    );
  }, []);

  const handleBoost = useCallback((amount: number) => {
    'background only';
    const currentVideo = videos[currentVideoIndex];
    if (!currentVideo || amount > user.coins || amount <= 0) {
      return;
    }

    // Create boost record
    const newBoost: Boost = {
      id: `boost_${Date.now()}`,
      videoId: currentVideo.id,
      userId: user.id,
      amount,
      timestamp: Date.now()
    };

    // Update video with new boost
    const updatedVideos = videos.map(video => 
      video.id === currentVideo.id 
        ? {
            ...video,
            totalBoosts: video.totalBoosts + 1,
            boostPool: video.boostPool + amount
          }
        : video
    );

    // Update user coins and boosts
    const updatedUser: User = {
      ...user,
      coins: user.coins - amount,
      boosts: [...user.boosts, newBoost]
    };

    setVideos(updatedVideos);
    setUser(updatedUser);

    console.log(`Boosted video ${currentVideo.id} with ${amount} coins!`);
  }, [currentVideoIndex, videos, user]);

  const currentVideo = videos[currentVideoIndex];

  return (
    <view className='app'>
      <TopNavbar>
        <CoinDisplay user={user} />
      </TopNavbar>
      
      <scroll-view 
        className='videos-container'
        scroll-y
        bindscrolltoupper={handleSwipeDown}
        bindscrolltolower={handleSwipeUp}
      >
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === currentVideoIndex}
          />
        ))}
      </scroll-view>

      {currentVideo && (
        <EngagementBar
          video={currentVideo}
          user={user}
          onBoost={handleBoost}
        />
      )}

      <BottomNavbar />
    </view>
  );
}
