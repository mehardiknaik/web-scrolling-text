import React from 'react';
import styles from './Playground.module.css';
import { animations } from './animations';

interface ConfigPanelProps {
  interval: number;
  animationDuration: number;
  loop: boolean;
  enterAnimation: string;
  exitAnimation: string;
  onIntervalChange: (value: number) => void;
  onAnimationDurationChange: (value: number) => void;
  onLoopChange: (value: boolean) => void;
  onEnterAnimationChange: (value: string) => void;
  onExitAnimationChange: (value: string) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  interval,
  animationDuration,
  loop,
  enterAnimation,
  exitAnimation,
  onIntervalChange,
  onAnimationDurationChange,
  onLoopChange,
  onEnterAnimationChange,
  onExitAnimationChange,
}) => {
  return (
    <div className={styles.configPanel}>
      <h3>⚙️ Configuration</h3>
      
      <div className={styles.configGroup}>
        <label htmlFor="interval">
          Interval (ms): <span className={styles.value}>{interval}</span>
        </label>
        <input
          id="interval"
          type="range"
          min="500"
          max="10000"
          step="100"
          value={interval}
          onChange={(e) => onIntervalChange(Number(e.target.value))}
        />
      </div>

      <div className={styles.configGroup}>
        <label htmlFor="duration">
          Animation Duration (ms): <span className={styles.value}>{animationDuration}</span>
        </label>
        <input
          id="duration"
          type="range"
          min="100"
          max="3000"
          step="100"
          value={animationDuration}
          onChange={(e) => onAnimationDurationChange(Number(e.target.value))}
        />
      </div>

      <div className={styles.configGroup}>
        <label htmlFor="enterAnimation">
          Enter Animation:
        </label>
        <select
          id="enterAnimation"
          value={enterAnimation}
          onChange={(e) => onEnterAnimationChange(e.target.value)}
          className={styles.select}
        >
          {animations.map((anim) => (
            <option key={anim.value} value={anim.value}>
              {anim.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.configGroup}>
        <label htmlFor="exitAnimation">
          Exit Animation:
        </label>
        <select
          id="exitAnimation"
          value={exitAnimation}
          onChange={(e) => onExitAnimationChange(e.target.value)}
          className={styles.select}
        >
          {animations.map((anim) => (
            <option key={anim.value} value={anim.value}>
              {anim.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.configGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={loop}
            onChange={(e) => onLoopChange(e.target.checked)}
          />
          <span>Loop Animation</span>
        </label>
      </div>
    </div>
  );
};

export default ConfigPanel;
