import React from 'react';
import ScrollingText from 'web-scrolling-text/react';
import styles from './Playground.module.css';

interface PreviewPanelProps {
  texts: string[];
  interval: number;
  animationDuration: number;
  loop: boolean;
  animationConfig: any;
  currentIndex: number;
  onCurrentIndexChange: (index: number) => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  texts,
  interval,
  animationDuration,
  loop,
  animationConfig,
  currentIndex,
  onCurrentIndexChange,
}) => {
  const scrollerRef = React.useRef<any>(null);

  const handleStart = () => {
    scrollerRef.current?.start();
  };

  const handlePause = () => {
    scrollerRef.current?.pause();
  };

  const handleStop = () => {
    scrollerRef.current?.stop();
  };

  if (texts.length === 0) {
    return (
      <div className={styles.previewPanel}>
        <div className={styles.previewEmpty}>
          Add some text items to see the preview
        </div>
      </div>
    );
  }

  return (
    <div className={styles.previewPanel}>
      <h3>👁️ Preview</h3>
      
      <div className={styles.previewContainer}>
        <ScrollingText
          ref={scrollerRef}
          options={{
            interval,
            animationDuration,
            loop,
            ...animationConfig,
            onChange: onCurrentIndexChange,
          }}
        >
          {texts.map((text, index) => (
            <div key={index} className={styles.previewText}>
              {text}
            </div>
          ))}
        </ScrollingText>
      </div>

      <div className={styles.controls}>
        <button onClick={handleStart} className={styles.controlButton}>
          ▶️ Start
        </button>
        <button onClick={handlePause} className={styles.controlButton}>
          ⏸️ Pause
        </button>
        <button onClick={handleStop} className={styles.controlButton}>
          ⏹️ Stop
        </button>
      </div>

      <div className={styles.status}>
        Current Index: <strong>{currentIndex}</strong> / {texts.length - 1}
      </div>
    </div>
  );
};

export default PreviewPanel;
