import { useState, useCallback, useEffect } from '@lynx-js/react';
import './App.css';
import { VideoCard } from './components/VideoCard.js';
import { TopNavbar } from './components/TopNavbar.js';
import { BottomNavbar } from './components/BottomNavbar.js';
import { videosData } from './data.js';

export function App(props: {
  onRender?: () => void
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    console.info('TikTok Clone with Lynx initialized');
  }, []);
  
  props.onRender?.();

  const handleSwipeUp = useCallback(() => {
    'background only';
    setCurrentVideoIndex(prev => 
      prev < videosData.length - 1 ? prev + 1 : prev
    );
  }, []);

  const handleSwipeDown = useCallback(() => {
    'background only';
    setCurrentVideoIndex(prev => 
      prev > 0 ? prev - 1 : prev
    );
  }, []);

  return (
    <view className='app'>
      <TopNavbar />
      
      <scroll-view 
        className='videos-container'
        scroll-y
        bindscrolltoupper={handleSwipeDown}
        bindscrolltolower={handleSwipeUp}
      >
        {videosData.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === currentVideoIndex}
          />
        ))}
      </scroll-view>

      <BottomNavbar />
    </view>
  );
}
