import { useCallback } from '@lynx-js/react';
import type { Video, User } from '../types.js';
import { formatNumber } from '../types.js';
import EngagementBar from './EngagementBar.js';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  user: User;
  onBoost: (amount: number) => void;
}

export function VideoCard({ video, isActive, user, onBoost }: VideoCardProps) {
  const handleLike = useCallback(() => {
    'background only';
    console.log('Like pressed for video:', video.id);
  }, [video.id]);

  const handleComment = useCallback(() => {
    'background only';
    console.log('Comment pressed for video:', video.id);
  }, [video.id]);

  const handleSave = useCallback(() => {
    'background only';
    console.log('Save pressed for video:', video.id);
  }, [video.id]);

  const handleShare = useCallback(() => {
    'background only';
    console.log('Share pressed for video:', video.id);
  }, [video.id]);

  const handleVideoTap = useCallback(() => {
    'background only';
    console.log('Video tapped:', video.id);
  }, [video.id]);

  return (
    <view className='video-card'>
      <view className='video-player' bindtap={handleVideoTap}>
        <view
          className="video-content"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            backgroundImage: `linear-gradient(135deg, 
              hsl(${(video.id * 137) % 360}, 70%, 25%), 
              hsl(${(video.id * 137 + 60) % 360}, 60%, 45%), 
              hsl(${(video.id * 137 + 120) % 360}, 80%, 35%))`,
            position: 'relative' as any,
            overflow: 'hidden' as any
          }}
        >
          {/* Animated background pattern */}
          <view style={{
            position: 'absolute' as any,
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 20px
            )`,
            opacity: 0.3
          }} />

          {/* View count overlay */}
          <view style={{
            position: 'absolute' as any,
            bottom: '15px',
            left: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '6px 12px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <text style={{
              color: '#fff',
              fontSize: '13px',
              fontWeight: 'bold' as any
            }}>
              👁️ {video.views > 1000 ? formatNumber(video.views) : video.views} views
            </text>
          </view>
        </view>
      </view>
      
      <view className='video-overlay'>
        <view className='video-info'>
          <view className='footer-left'>
            <view className='user-info'>
              <image className='profile-pic' src={video.profilePic} />
              <view className='user-details'>
                <text className='username'>@{video.username}</text>
                <text className='description'>{video.description}</text>
                <view className='music-info'>
                  <text className='music-icon'>🎵</text>
                  <text className='song'>{video.song}</text>
                </view>
              </view>
            </view>
          </view>

          <view className='footer-right'>
            <view className='action-button' bindtap={handleLike}>
              <text className='action-icon heart'>♥</text>
              <text className='action-count'>{formatNumber(video.likes)}</text>
            </view>

            <view className='action-button' bindtap={handleComment}>
              <text className='action-icon'>💬</text>
              <text className='action-count'>{formatNumber(video.comments)}</text>
            </view>

            <view className='action-button' bindtap={handleSave}>
              <text className='action-icon'>🔖</text>
              <text className='action-count'>{formatNumber(video.saves)}</text>
            </view>

            <view className='action-button' bindtap={handleShare}>
              <text className='action-icon'>📤</text>
              <text className='action-count'>{formatNumber(video.shares)}</text>
            </view>
          </view>
        </view>
      </view>

      {/* Add EngagementBar for each video */}
      <EngagementBar
        video={video}
        user={user}
        onBoost={onBoost}
      />
    </view>
  );
}
