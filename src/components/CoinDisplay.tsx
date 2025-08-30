import { useCallback } from '@lynx-js/react';
import type { User } from '../types.js';
import { formatNumber } from '../types.js';

interface CoinDisplayProps {
  user: User;
  onClick?: () => void;
}

export function CoinDisplay({ user, onClick }: CoinDisplayProps) {
  const handleClick = useCallback(() => {
    'background only';
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <view 
      style={{
        display: 'flex' as any,
        flexDirection: 'row' as any,
        alignItems: 'center' as any,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: ' 20px',
        padding: '6px',
        paddingLeft: '10px',
        paddingRight: '10px',
        cursor: onClick ? 'pointer' : 'default',
        whiteSpace: 'nowrap' as any,
        minWidth: '70px',
        position: 'fixed' as any,
        top: '53px',
        left: '16px',
        zIndex: '101px',
      }}
      bindtap={onClick ? handleClick : undefined}
    >
      <text style={{
        fontSize: '14px',
        marginRight: '4px'
      }}>
        🪙
      </text>
      <text style={{
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold' as any,
        whiteSpace: 'nowrap' as any
      }}>
        {formatNumber(user.coins)}
      </text>
    </view>
  );
}

export default CoinDisplay;
