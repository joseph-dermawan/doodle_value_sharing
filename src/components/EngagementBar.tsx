import { useState, useCallback, useEffect } from '@lynx-js/react';
import type { Video, User } from '../types.js';
import { calculateEngagementScore, formatNumber, getVideoPhase, getTimeRemaining } from '../types.js';

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

const BoostModal: React.FC<BoostModalProps> = ({ isOpen, onClose, onBoost, userCoins }) => {
  const [boostAmount, setBoostAmount] = useState(10);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100, 250];

  const handleBoost = useCallback(() => {
    if (boostAmount <= userCoins && boostAmount > 0) {
      onBoost(boostAmount); // 🔑 when this fires → EngagementBar.triggerBoost runs
      onClose();
    }
  }, [boostAmount, userCoins, onBoost, onClose]);

  const handlePresetSelect = useCallback(
    (amount: number) => {
      if (amount <= userCoins) {
        setBoostAmount(amount);
        setSelectedAmount(amount);
      }
    },
    [userCoins]
  );

  if (!isOpen) return null;

  return (
    <view
      style={{
        position: 'fixed' as any,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex' as any,
        alignItems: 'center' as any,
        justifyContent: 'center' as any,
        zIndex: 1000,
      }}
    >
      <view
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '15px',
          padding: '24px',
          width: '90%',
          maxWidth: '400px',
          border: '1px solid #333',
        }}
      >
        <view
          style={{
            display: 'flex' as any,
            justifyContent: 'space-between' as any,
            alignItems: 'center' as any,
            marginBottom: '20px',
          }}
        >
          <text style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' as any }}>
            🚀 Boost This Video
          </text>
          <text
            style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' as any }}
            bindtap={onClose}
          >
            ×
          </text>
        </view>

        <view style={{ marginBottom: '20px' }}>
          <text style={{ color: '#888', fontSize: '16px', marginBottom: '8px' }}>
            Your Coins: {formatNumber(userCoins)} 🪙
          </text>
          <text style={{ color: '#888', fontSize: '14px' }}>
            Invest coins in content you believe will perform well. Higher engagement = higher
            rewards!
          </text>
        </view>

        <view style={{ marginBottom: '20px' }}>
          <text style={{ color: '#fff', fontSize: '16px', marginBottom: '12px' }}>
            Select Amount:
          </text>
          <view
            style={{
              display: 'flex' as any,
              flexDirection: 'row' as any,
              flexWrap: 'wrap' as any,
              gap: '8px',
            }}
          >
            {presetAmounts.map((amount) => (
              <view
                key={amount}
                style={{
                  backgroundColor: selectedAmount === amount ? '#ff0050' : '#333',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer' as any,
                  opacity: amount > userCoins ? 0.5 : 1,
                }}
                bindtap={() => handlePresetSelect(amount)}
              >
                <text style={{ color: '#fff', fontSize: '16px' }}>{amount} 🪙</text>
              </view>
            ))}
          </view>
        </view>

        <view
          style={{
            display: 'flex' as any,
            flexDirection: 'row' as any,
            gap: '12px',
            marginTop: '20px',
          }}
        >
          <view
            style={{
              flex: 0.8,
              backgroundColor: '#333',
              padding: '10px 8px',
              borderRadius: '8px',
              cursor: 'pointer' as any,
              minWidth: '80px',
              maxWidth: '100px',
            }}
            bindtap={onClose}
          >
            <text
              style={{
                color: '#fff',
                textAlign: 'center' as any,
                fontSize: '15px',
                paddingTop: '4px',
              }}
            >
              Cancel
            </text>
          </view>
          <view
            style={{
              flex: 1.5,
              backgroundColor: boostAmount > 0 && boostAmount <= userCoins ? '#ff0050' : '#666',
              padding: '14px 12px',
              borderRadius: '8px',
              cursor: boostAmount > 0 && boostAmount <= userCoins ? 'pointer' : 'not-allowed',
              opacity: boostAmount > 0 && boostAmount <= userCoins ? 1 : 0.5,
              minWidth: '120px',
            }}
            bindtap={handleBoost}
          >
            <text
              style={{
                color: '#fff',
                textAlign: 'center' as any,
                fontSize: '17px',
                fontWeight: 'bold' as any,
                whiteSpace: 'nowrap' as any,
              }}
            >
              🚀 Boost {boostAmount} 🪙
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
  const baseEngagementScore = calculateEngagementScore(video);
  const engagementScore = Math.max(0, Math.min(100, baseEngagementScore + fluctuationOffset));
  const scorePercentage = engagementScore;

  // ---- BOOST EFFECT STATE ----
  const [boostStrength, setBoostStrength] = useState(0);

  // 🔑 Trigger boost effect (called inside onBoost handler)
  const triggerBoost = useCallback((amount: number) => {
    const boostEffect = Math.log(amount + 1) * 2; // diminishing returns
    setBoostStrength((prev) => prev + boostEffect);
  }, []);

  useEffect(() => {
    const deviation = 4;         // ← baseline fluctuation size (higher = more wiggle)
    const stepScale = 2;       // ← multiplier on random fluctuation step
    const smoothing = 0;      // ← how smooth/laggy transitions feel (0=snappy, 1=super smooth)
    const tickInterval = 1500;   // ← how often the bar updates in ms
    let prevEngagement = calculateEngagementScore(video);
    let boostStrength = 0; // current boost effect strength

    const interval = setInterval(() => {
      // Random Gaussian noise generator
      const randStdNormal = () => {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      };

      // baseline fluctuation (natural breathing)
      const step = randStdNormal() * deviation * stepScale;

      // apply decaying boost
      if (boostStrength > 0) {
        const decayRate = 0.85; // 🔧 boost decay speed (lower = faster fade)
        boostStrength *= decayRate;
      }

      // target engagement = previous + noise + boost
      let targetEngagement = prevEngagement + step + boostStrength;

      // smooth transition to target
      let newEngagement =
        prevEngagement * (1 - smoothing) + targetEngagement * smoothing + 20 * randStdNormal();

      // clamp to [0,100]
      newEngagement = Math.max(0, Math.min(100, newEngagement));
      prevEngagement = newEngagement;

      setFluctuationOffset(newEngagement - baseEngagementScore);
    }, tickInterval);

    return () => clearInterval(interval);
  }, [video, baseEngagementScore]);

  // ---- Phase / UI helpers ----
  const currentPhase = getVideoPhase(video);
  const canBoost = currentPhase === 'boosting';

  const getPhaseTimeRemaining = () => {
    switch (currentPhase) {
      case 'boosting':
        return getTimeRemaining(video.boostWindowEnd);
      case 'locked':
        return getTimeRemaining(video.lockPeriodEnd);
      case 'claiming':
        return getTimeRemaining(video.claimPeriodEnd);
      default:
        return 'Closed';
    }
  };
  const getPhaseLabel = () => {
    switch (currentPhase) {
      case 'boosting':
        return '🚀 Boost Window';
      case 'locked':
        return '🔒 Lock Period';
      case 'claiming':
        return '💰 Claim Period';
      default:
        return '⏰ Closed';
    }
  };
  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'boosting':
        return '#00ff88';
      case 'locked':
        return '#ffaa00';
      case 'claiming':
        return '#4dabf7';
      default:
        return '#666';
    }
  };

  // Expand / collapse
  const handleExpand = useCallback(() => setIsExpanded(true), []);
  const handleCollapse = useCallback(() => setIsExpanded(false), []);
  const handleOpenBoost = useCallback(() => setIsBoostModalOpen(true), []);
  const handleCloseBoost = useCallback(() => setIsBoostModalOpen(false), []);

  // Wrap onBoost so we also trigger visual effect
  const handleBoost = useCallback(
    (amount: number) => {
      onBoost(amount); 
      triggerBoost(amount); 
    },
    [onBoost, triggerBoost]
  );

  return (
    <>
      <view
        style={{
          position: 'absolute' as any,
          left: '12px',
          bottom: '120px',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '25px',
          padding: isExpanded ? '16px' : '8px',
          minHeight: isExpanded ? '200px' : '60px',
          width: isExpanded ? '160px' : '48px',
        }}
      >
        {!isExpanded ? (
          // Collapsed
          <view
            style={{
              display: 'flex' as any,
              flexDirection: 'column' as any,
              alignItems: 'center' as any,
              height: '100%',
            }}
            bindtap={handleExpand}
          >
            <text style={{ fontSize: '20px', marginBottom: '6px' }}>🚀</text>
            <view
              style={{
                width: '6px',
                height: '45px',
                backgroundColor: '#333',
                borderRadius: '3px',
                overflow: 'hidden' as any,
                display: 'flex' as any,
                alignItems: 'flex-end' as any,
              }}
            >
              <view
                style={{
                  width: '100%',
                  height: `${scorePercentage}%`,
                  backgroundColor:
                    scorePercentage > 70
                      ? '#00ff88'
                      : scorePercentage > 40
                      ? '#ffaa00'
                      : '#ff4444',
                  borderRadius: '2px',
                }}
              />
            </view>
          </view>
        ) : (
          // Expanded
          <view style={{ display: 'flex' as any, flexDirection: 'column', height: '100%' }}>
            <view
              style={{
                display: 'flex' as any,
                flexDirection: 'row' as any,
                justifyContent: 'space-between' as any,
                alignItems: 'center' as any,
                marginBottom: '12px',
              }}
            >
              <text style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' as any }}>
                Engagement
              </text>
              <text
                style={{ color: '#fff', fontSize: '16px', cursor: 'pointer' as any }}
                bindtap={handleCollapse}
              >
                ×
              </text>
            </view>

            <view style={{ marginBottom: '12px' }}>
              <text
                style={{
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 'bold' as any,
                  textAlign: 'center' as any,
                }}
              >
                {scorePercentage.toFixed(1)}
              </text>
              <view
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden' as any,
                  marginTop: '4px',
                }}
              >
                <view
                  style={{
                    width: `${scorePercentage}%`,
                    height: '100%',
                    backgroundColor:
                      scorePercentage > 70
                        ? '#00ff88'
                        : scorePercentage > 40
                        ? '#ffaa00'
                        : '#ff4444',
                    borderRadius: '4px',
                  }}
                />
              </view>
            </view>

            {/* Phase Info */}
            <view style={{ marginBottom: '12px' }}>
              <text
                style={{
                  color: getPhaseColor(),
                  fontSize: '10px',
                  textAlign: 'center' as any,
                  fontWeight: 'bold' as any,
                  marginBottom: '2px',
                }}
              >
                {getPhaseLabel()}
              </text>
              <text style={{ color: '#888', fontSize: '9px', textAlign: 'center' as any }}>
                {getPhaseTimeRemaining()}
              </text>
            </view>

            {/* Pool + Boosts */}
            <view style={{ marginBottom: '12px' }}>
              <text
                style={{ color: '#888', fontSize: '11px', textAlign: 'center' as any }}
              >
                Pool: {formatNumber(video.boostPool)} 🪙
              </text>
              <text
                style={{ color: '#888', fontSize: '11px', textAlign: 'center' as any }}
              >
                Boosts: {video.totalBoosts}
              </text>
            </view>

            {/* Action */}
            {canBoost ? (
              <view
                style={{
                  backgroundColor: '#ff0050',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  cursor: 'pointer' as any,
                  marginTop: 'auto',
                }}
                bindtap={handleOpenBoost}
              >
                <text
                  style={{
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold' as any,
                    textAlign: 'center' as any,
                  }}
                >
                  🚀 Boost
                </text>
              </view>
            ) : (
              <view
                style={{
                  backgroundColor: '#666',
                  padding: '8px',
                  borderRadius: '20px',
                  opacity: 0.6,
                }}
              >
                <text
                  style={{
                    color: '#fff',
                    fontSize: '12px',
                    textAlign: 'center' as any,
                  }}
                >
                  {currentPhase === 'locked' ? '🔒 Locked' : '⏰ Closed'}
                </text>
              </view>
            )}
          </view>
        )}
      </view>

      {/* Modal */}
      <BoostModal
        isOpen={isBoostModalOpen}
        onClose={handleCloseBoost}
        onBoost={handleBoost} 
        userCoins={user.coins}
        videoId={video.id}
      />
    </>
  );
};

export default EngagementBar;
