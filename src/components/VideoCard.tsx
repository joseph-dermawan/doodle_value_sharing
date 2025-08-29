import { useCallback } from '@lynx-js/react';
import type { Video } from '../types.js';
import { formatNumber } from '../types.js';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

export function VideoCard({ video, isActive }: VideoCardProps) {
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
        <image 
          src={video.url}
          mode="aspectFill"
          className="video-content"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 12
          }}
        />
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
                  <text className='music-icon'>♪</text>
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
    </view>
  );
}
