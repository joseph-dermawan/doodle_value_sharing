import { useCallback } from '@lynx-js/react';

export function BottomNavbar() {
  const handleHomePress = useCallback(() => {
    'background only';
    console.log('Home pressed');
  }, []);

  const handleDiscoverPress = useCallback(() => {
    'background only';
    console.log('Discover pressed');
  }, []);

  const handleCreatePress = useCallback(() => {
    'background only';
    console.log('Create pressed');
  }, []);

  const handleInboxPress = useCallback(() => {
    'background only';
    console.log('Inbox pressed');
  }, []);

  const handleProfilePress = useCallback(() => {
    'background only';
    console.log('Profile pressed');
  }, []);

  return (
    <view className='bottom-navbar'>
      <view className='nav-item active' bindtap={handleHomePress}>
        <text className='nav-icon'>🏠</text>
        <text className='nav-label'>Home</text>
      </view>

      <view className='nav-item' bindtap={handleDiscoverPress}>
        <text className='nav-icon'>🧭</text>
        <text className='nav-label'>Discover</text>
      </view>

      <view className='nav-item' bindtap={handleCreatePress}>
        <view className='plus-icon'>
          <text className='plus-text'>+</text>
        </view>
      </view>

      <view className='nav-item' bindtap={handleInboxPress}>
        <text className='nav-icon'>📥</text>
        <text className='nav-label'>Inbox</text>
      </view>

      <view className='nav-item' bindtap={handleProfilePress}>
        <text className='nav-icon'>👤</text>
        <text className='nav-label'>Profile</text>
      </view>
    </view>
  );
}
