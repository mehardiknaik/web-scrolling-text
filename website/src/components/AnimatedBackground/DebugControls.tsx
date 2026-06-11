import React from 'react';
import { animations } from './animations';
import { motion } from 'motion/react';

interface DebugControlsProps {
  activePattern: number;
  isOverride: boolean;
  toggleOverride: () => void;
  selectAnimation: (index: number) => void;
}

export default function DebugControls({
  activePattern,
  isOverride,
  toggleOverride,
  selectAnimation,
}: DebugControlsProps) {
  const currentAnimation = animations[activePattern];

  return (
    <motion.div drag dragElastic={0}
      dragMomentum={false} whileDrag={{ cursor: "grabbing" }} style={{
        position: 'absolute',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        padding: '8px 16px',
        borderRadius: '16px',
        fontSize: '11px',
        fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontWeight: 600,
        zIndex: 99999,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '320px',
      }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '6px',
      }}>
        <span style={{ color: '#38bdf8', letterSpacing: '0.05em' }}>DEBUG PANEL</span>
        <button
          onClick={toggleOverride}
          style={{
            backgroundColor: isOverride ? '#ef4444' : '#22c55e',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '3px 8px',
            cursor: 'pointer',
            fontSize: '9px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'background-color 0.2s',
          }}
        >
          {isOverride ? 'Manual ON' : 'Auto Cycling'}
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '4px 0',
      }}>
        {animations.map((anim, idx) => (
          <button
            key={idx}
            onClick={() => selectAnimation(idx)}
            title={anim.name}
            style={{
              backgroundColor: activePattern === idx ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.06)',
              color: activePattern === idx ? '#38bdf8' : '#94a3b8',
              border: activePattern === idx ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '6px',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '10px',
              fontWeight: 'bold',
              transition: 'all 0.15s ease',
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div style={{
        color: '#e2e8f0',
        fontSize: '10px',
        marginTop: '2px',
        textAlign: 'center',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        Pattern {activePattern + 1}: <span style={{ color: '#38bdf8' }}>{currentAnimation.name}</span>
      </div>
    </motion.div>
  );
}
