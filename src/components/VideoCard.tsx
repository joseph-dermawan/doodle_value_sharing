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
            backgroundColor: `hsl(${(video.id * 137) % 360}, 70%, 45%)`, // Generate unique color per video
            display: 'flex' as any,
            alignItems: 'center' as any,
            justifyContent: 'center' as any,
            position: 'relative' as any
          }}
        >
          {/* Video placeholder with play icon */}
          <view style={{
            position: 'absolute' as any,
            top: '50%' as any,
            left: '50%' as any,
            transform: 'translate(-50%, -50%)' as any,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50px',
            width: '80px',
            height: '80px',
            display: 'flex' as any,
            alignItems: 'center' as any,
            justifyContent: 'center' as any,
            opacity: isActive ? 0.3 : 0.7
          }}>
            <text style={{
              fontSize: '30px',
              color: '#fff'
            }}>
              {isActive ? '⏸️' : '▶️'}
            </text>
          </view>
          
          {/* Video info overlay */}
          <view style={{
            position: 'absolute' as any,
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            <text style={{
              color: '#fff',
              fontSize: '12px'
            }}>
              Video {video.id}
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
