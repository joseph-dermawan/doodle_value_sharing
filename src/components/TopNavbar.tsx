export function TopNavbar() {
  return (
    <view className='top-navbar'>
      <view className='nav-left'>
        <text className='nav-icon'>📺</text>
        <text className='nav-text'>Following</text>
      </view>
      
      <view className='nav-center'>
        <text className='nav-text active'>For You</text>
      </view>
      
      <view className='nav-right'>
        <text className='nav-icon'>🔍</text>
      </view>
    </view>
  );
}
