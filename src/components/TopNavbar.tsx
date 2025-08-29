interface TopNavbarProps {
  children?: React.ReactNode;
}

export function TopNavbar({ children }: TopNavbarProps) {
  return (
    <view className='top-navbar'>
      <view className='nav-left'>
        <text className='nav-text'>Following</text>
      </view>
      
      <view className='nav-center'>
        <text className='nav-text active'>For You</text>
      </view>
      
      <view className='nav-right'>
        {children}
        <text className='nav-icon'>🔍</text>
      </view>
    </view>
  );
}
