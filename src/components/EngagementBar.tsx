import { useState, useCallback, useEffect } from '@lynx-js/react';
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
            fontSize: '16px',
            marginBottom: '8px'
          }}>
            Your Coins: {formatNumber(userCoins)} 🪙
          </text>
          <text style={{
            color: '#888',
            fontSize: '14px'
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
                  fontSize: '16px'
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
  const [fluctuationOffset, setFluctuationOffset] = useState(0);
  const [trendBoost, setTrendBoost] = useState(0);
  
  const baseEngagementScore = calculateEngagementScore(video);
  const engagementScore = Math.max(0, Math.min(100, baseEngagementScore + fluctuationOffset + trendBoost));
  const scorePercentage = engagementScore;

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
  // Engagement fluctuation simulation with stronger, time-limited boost effect
  useEffect(() => {
    const deviation = 5;
    let prevEngagement = calculateEngagementScore(video); // Start from base score
    let boostTicks = 0;
    let isBoostActive = false;

    const interval = setInterval(() => {
      // Generate a normal-distributed random value, multiplied by random sign
      const randStdNormal = () => {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      };
      const sign = Math.random() < 0.5 ? -1 : 1;
      const maxStep = 0.5 * deviation;
      // Occasionally force a downward trend
      const downwardChance = Math.random();
      const stepBase = randStdNormal() * deviation * 0.5;
      const step = downwardChance < 0.25 ? -Math.abs(stepBase) : stepBase * sign;

      // Strong boost effect for 3 ticks, then expire
      let boostValue = 0;
      if (boostTicks < 3) {
        boostValue = 15;
        boostTicks++;
        isBoostActive = true;
      } else {
        boostValue = 0;
        isBoostActive = false;
      }

      // Calculate new engagement value
      let newEngagement = prevEngagement + step + boostValue;
      newEngagement = Math.max(0, Math.min(100, newEngagement));
      prevEngagement = newEngagement;

      // Set fluctuationOffset and trendBoost so engagementScore reflects newEngagement
      setFluctuationOffset(newEngagement - baseEngagementScore);
      setTrendBoost(boostValue);

    }, 1500);

    return () => clearInterval(interval);
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
              fontSize: '20px',
              marginBottom: '6px'
            }}>
              🚀
            </text>
            <view style={{
              width: '6px',
              height: '45px',
              backgroundColor: '#333',
              borderRadius: '3px',
              overflow: 'hidden' as any,
              display: 'flex' as any,
              alignItems: 'flex-end' as any
            }}>
              <view style={{
                width: '100%',
                height: `${scorePercentage}%`,
                backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                borderRadius: '2px'
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
                  borderRadius: '4px'
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
