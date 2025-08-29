import { useState, useCallback } from '@lynx-js/react';
import type { Video, User, Boost } from '../types.js';
import { calculateEngagementScore, formatNumber } from '../types.js';

interface EngagementBarProps {
  video: Video;
  user: User;
  onBoost: (amount: number) => void;
}

interface BoostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBoost: (amount: number) => void;
  userCoins: number;
  videoId: number;
}

const BoostModal: React.FC<BoostModalProps> = ({ isOpen, onClose, onBoost, userCoins, videoId }) => {
  const [boostAmount, setBoostAmount] = useState(10);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100, 250];

  const handleBoost = useCallback(() => {
    'background only';
    if (boostAmount <= userCoins && boostAmount > 0) {
      onBoost(boostAmount);
      onClose();
    }
  }, [boostAmount, userCoins, onBoost, onClose]);

  const handlePresetSelect = useCallback((amount: number) => {
    'background only';
    if (amount <= userCoins) {
      setBoostAmount(amount);
      setSelectedAmount(amount);
    }
  }, [userCoins]);

  const handleClose = useCallback(() => {
    'background only';
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <view style={{
      position: 'fixed' as any,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex' as any,
      alignItems: 'center' as any,
      justifyContent: 'center' as any,
      zIndex: 1000
    }}>
      <view style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '15px',
        padding: '24px',
        width: '90%',
        maxWidth: '400px',
        border: '1px solid #333'
      }}>
        <view style={{
          display: 'flex' as any,
          justifyContent: 'space-between' as any,
          alignItems: 'center' as any,
          marginBottom: '20px'
        }}>
          <text style={{
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold' as any
          }}>
            🚀 Boost This Video
          </text>
          <text 
            style={{
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer' as any
            }}
            bindtap={handleClose}
          >
            ×
          </text>
        </view>

        <view style={{ marginBottom: '20px' }}>
          <text style={{
            color: '#888',
            fontSize: '14px',
            marginBottom: '8px'
          }}>
            Your Coins: {formatNumber(userCoins)} 🪙
          </text>
          <text style={{
            color: '#888',
            fontSize: '12px',
            lineHeight: '18px'
          }}>
            Invest coins in content you believe will perform well. Higher engagement = higher rewards!
          </text>
        </view>

        <view style={{ marginBottom: '20px' }}>
          <text style={{
            color: '#fff',
            fontSize: '16px',
            marginBottom: '12px'
          }}>
            Select Amount:
          </text>
          <view style={{
            display: 'flex' as any,
            flexDirection: 'row' as any,
            flexWrap: 'wrap' as any,
            gap: '8px'
          }}>
            {presetAmounts.map(amount => (
              <view
                key={amount}
                style={{
                  backgroundColor: selectedAmount === amount ? '#ff0050' : '#333',
                  padding: '8px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  borderRadius: '20px',
                  cursor: 'pointer' as any,
                  opacity: amount > userCoins ? 0.5 : 1
                }}
                bindtap={() => handlePresetSelect(amount)}
              >
                <text style={{
                  color: '#fff',
                  fontSize: '14px'
                }}>
                  {amount} 🪙
                </text>
              </view>
            ))}
          </view>
        </view>

        <view style={{
          display: 'flex' as any,
          flexDirection: 'row' as any,
          gap: '12px',
          marginTop: '20px'
        }}>
          <view
            style={{
              flex: 1,
              backgroundColor: '#333',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer' as any
            }}
            bindtap={handleClose}
          >
            <text style={{
              color: '#fff',
              textAlign: 'center' as any,
              fontSize: '16px'
            }}>
              Cancel
            </text>
          </view>
          <view
            style={{
              flex: 1,
              backgroundColor: boostAmount > 0 && boostAmount <= userCoins ? '#ff0050' : '#666',
              padding: '12px',
              borderRadius: '8px',
              cursor: boostAmount > 0 && boostAmount <= userCoins ? 'pointer' : 'not-allowed',
              opacity: boostAmount > 0 && boostAmount <= userCoins ? 1 : 0.5
            }}
            bindtap={handleBoost}
          >
            <text style={{
              color: '#fff',
              textAlign: 'center' as any,
              fontSize: '16px',
              fontWeight: 'bold' as any
            }}>
              ✓ Boost {boostAmount} 🪙
            </text>
          </view>
        </view>
      </view>
    </view>
  );
};

const EngagementBar: React.FC<EngagementBarProps> = ({ video, user, onBoost }) => {
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const engagementScore = calculateEngagementScore(video);
  const scorePercentage = Math.min(engagementScore, 100);

  const handleExpand = useCallback(() => {
    'background only';
    setIsExpanded(true);
  }, []);

  const handleCollapse = useCallback(() => {
    'background only';
    setIsExpanded(false);
  }, []);

  const handleOpenBoost = useCallback(() => {
    'background only';
    setIsBoostModalOpen(true);
  }, []);

  const handleCloseBoost = useCallback(() => {
    'background only';
    setIsBoostModalOpen(false);
  }, []);

  return (
    <>
      <view style={{
        position: 'fixed' as any,
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)' as any,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '25px',
        padding: isExpanded ? '16px' : '8px',
        minHeight: isExpanded ? '200px' : '60px',
        width: isExpanded ? '160px' : '48px',
        transition: 'all 0.3s ease',
        cursor: 'pointer' as any
      }}>
        {!isExpanded ? (
          // Collapsed state
          <view 
            style={{
              display: 'flex' as any,
              flexDirection: 'column' as any,
              alignItems: 'center' as any,
              height: '100%'
            }}
            bindtap={handleExpand}
          >
            <text style={{
              fontSize: '16px',
              marginBottom: '4px'
            }}>
              🚀
            </text>
            <view style={{
              width: '4px',
              height: '30px',
              backgroundColor: '#333',
              borderRadius: '2px',
              overflow: 'hidden' as any
            }}>
              <view style={{
                width: '100%',
                height: `${scorePercentage}%`,
                backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                borderRadius: '2px',
                transition: 'height 0.5s ease'
              }} />
            </view>
          </view>
        ) : (
          // Expanded state
          <view style={{
            display: 'flex' as any,
            flexDirection: 'column' as any,
            height: '100%'
          }}>
            <view style={{
              display: 'flex' as any,
              flexDirection: 'row' as any,
              justifyContent: 'space-between' as any,
              alignItems: 'center' as any,
              marginBottom: '12px'
            }}>
              <text style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold' as any
              }}>
                Engagement
              </text>
              <text 
                style={{
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer' as any
                }}
                bindtap={handleCollapse}
              >
                ×
              </text>
            </view>

            <view style={{
              marginBottom: '12px'
            }}>
              <text style={{
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold' as any,
                textAlign: 'center' as any
              }}>
                {scorePercentage.toFixed(1)}
              </text>
              <view style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#333',
                borderRadius: '4px',
                overflow: 'hidden' as any,
                marginTop: '4px'
              }}>
                <view style={{
                  width: `${scorePercentage}%`,
                  height: '100%',
                  backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                  borderRadius: '4px',
                  transition: 'width 0.5s ease'
                }} />
              </view>
            </view>

            <view style={{ marginBottom: '12px' }}>
              <text style={{
                color: '#888',
                fontSize: '11px',
                textAlign: 'center' as any,
                marginBottom: '4px'
              }}>
                Pool: {formatNumber(video.boostPool)} 🪙
              </text>
              <text style={{
                color: '#888',
                fontSize: '11px',
                textAlign: 'center' as any
              }}>
                Boosts: {video.totalBoosts}
              </text>
            </view>

            <view
              style={{
                backgroundColor: '#ff0050',
                padding: '8px',
                paddingLeft: '12px',
                paddingRight: '12px',
                borderRadius: '20px',
                cursor: 'pointer' as any,
                marginTop: 'auto'
              }}
              bindtap={handleOpenBoost}
            >
              <text style={{
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold' as any,
                textAlign: 'center' as any
              }}>
                🚀 Boost
              </text>
            </view>
          </view>
        )}
      </view>

      <BoostModal
        isOpen={isBoostModalOpen}
        onClose={handleCloseBoost}
        onBoost={onBoost}
        userCoins={user.coins}
        videoId={video.id}
      />
    </>
  );
};

export default EngagementBar;
