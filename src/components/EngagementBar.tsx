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
        borderRadius: 15,
        padding: 24,
        width: '90%',
        maxWidth: 400,
        border: '1px solid #333'
      }}>
        <view style={{
          display: 'flex' as any,
          justifyContent: 'space-between' as any,
          alignItems: 'center' as any,
          marginBottom: 20
        }}>
          <text style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold' as any
          }}>
            🚀 Boost This Video
          </text>
          <text 
            style={{
              color: '#fff',
              fontSize: 24,
              cursor: 'pointer' as any
            }}
            bindtap={handleClose}
          >
            ×
          </text>
        </view>

        <view style={{ marginBottom: 20 }}>
          <text style={{
            color: '#888',
            fontSize: 14,
            marginBottom: 8
          }}>
            Your Coins: {formatNumber(userCoins)} 🪙
          </text>
          <text style={{
            color: '#888',
            fontSize: 12,
            lineHeight: 18
          }}>
            Invest coins in content you believe will perform well. Higher engagement = higher rewards!
          </text>
        </view>

        <view style={{ marginBottom: 20 }}>
          <text style={{
            color: '#fff',
            fontSize: 16,
            marginBottom: 12
          }}>
            Select Amount:
          </text>
          <view style={{
            display: 'flex' as any,
            flexDirection: 'row' as any,
            flexWrap: 'wrap' as any,
            gap: 8
          }}>
            {presetAmounts.map(amount => (
              <view
                key={amount}
                style={{
                  backgroundColor: selectedAmount === amount ? '#ff0050' : '#333',
                  padding: '8px 16px',
                  borderRadius: 20,
                  cursor: 'pointer' as any,
                  opacity: amount > userCoins ? 0.5 : 1
                }}
                bindtap={() => handlePresetSelect(amount)}
              >
                <text style={{
                  color: '#fff',
                  fontSize: 14
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
          gap: 12
        }}>
          <view
            style={{
              flex: 1,
              backgroundColor: '#333',
              padding: '12px 0',
              borderRadius: 8,
              cursor: 'pointer' as any
            }}
            bindtap={handleClose}
          >
            <text style={{
              color: '#fff',
              textAlign: 'center' as any,
              fontSize: 16
            }}>
              Cancel
            </text>
          </view>
          <view
            style={{
              flex: 1,
              backgroundColor: boostAmount > 0 && boostAmount <= userCoins ? '#ff0050' : '#666',
              padding: '12px 0',
              borderRadius: 8,
              cursor: boostAmount > 0 && boostAmount <= userCoins ? 'pointer' : 'not-allowed',
              opacity: boostAmount > 0 && boostAmount <= userCoins ? 1 : 0.5
            }}
            bindtap={handleBoost}
          >
            <text style={{
              color: '#fff',
              textAlign: 'center' as any,
              fontSize: 16,
              fontWeight: 'bold' as any
            }}>
              Boost {boostAmount} 🪙
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
        left: 12,
        top: '50%',
        transform: 'translateY(-50%)' as any,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 25,
        padding: isExpanded ? 16 : 8,
        minHeight: isExpanded ? 200 : 60,
        width: isExpanded ? 160 : 48,
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
              fontSize: 16,
              marginBottom: 4
            }}>
              📊
            </text>
            <view style={{
              width: 4,
              height: 30,
              backgroundColor: '#333',
              borderRadius: 2,
              overflow: 'hidden' as any
            }}>
              <view style={{
                width: '100%',
                height: `${scorePercentage}%`,
                backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                borderRadius: 2,
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
              marginBottom: 12
            }}>
              <text style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold' as any
              }}>
                Engagement
              </text>
              <text 
                style={{
                  color: '#fff',
                  fontSize: 16,
                  cursor: 'pointer' as any
                }}
                bindtap={handleCollapse}
              >
                ×
              </text>
            </view>

            <view style={{
              marginBottom: 12
            }}>
              <text style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold' as any,
                textAlign: 'center' as any
              }}>
                {scorePercentage.toFixed(1)}
              </text>
              <view style={{
                width: '100%',
                height: 8,
                backgroundColor: '#333',
                borderRadius: 4,
                overflow: 'hidden' as any,
                marginTop: 4
              }}>
                <view style={{
                  width: `${scorePercentage}%`,
                  height: '100%',
                  backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                  borderRadius: 4,
                  transition: 'width 0.5s ease'
                }} />
              </view>
            </view>

            <view style={{ marginBottom: 12 }}>
              <text style={{
                color: '#888',
                fontSize: 11,
                textAlign: 'center' as any,
                marginBottom: 4
              }}>
                Pool: {formatNumber(video.boostPool)} 🪙
              </text>
              <text style={{
                color: '#888',
                fontSize: 11,
                textAlign: 'center' as any
              }}>
                Boosts: {video.totalBoosts}
              </text>
            </view>

            <view
              style={{
                backgroundColor: '#ff0050',
                padding: '8px 12px',
                borderRadius: 20,
                cursor: 'pointer' as any,
                marginTop: 'auto'
              }}
              bindtap={handleOpenBoost}
            >
              <text style={{
                color: '#fff',
                fontSize: 12,
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
