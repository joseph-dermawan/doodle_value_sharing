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
        borderRadius: 20,
        padding: 6,
        paddingLeft: 10,
        paddingRight: 10,
        cursor: onClick ? 'pointer' : 'default',
        whiteSpace: 'nowrap' as any,
        minWidth: 70,
        position: 'fixed' as any,
        top: 53,
        left: 16,
        zIndex: 101,
      }}
      bindtap={onClick ? handleClick : undefined}
    >
      <text style={{
        fontSize: 14,
        marginRight: 4
      }}>
        🪙
      </text>
      <text style={{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold' as any,
        whiteSpace: 'nowrap' as any
      }}>
        {formatNumber(user.coins)}
      </text>
    </view>
  );
}

export default CoinDisplay;
