import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";
import styles from "./Playground.module.css";

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
  const scrollerRef = React.useRef<ScrollingType>(null);
  const [playState, setPlayState] = React.useState<
    "stopped" | "playing" | "paused"
  >("playing");

  const handleStart = () => {
    scrollerRef.current?.start();
  };

  const handlePause = () => {
    scrollerRef.current?.pause();
    handleStateChange("paused");
  };

  const handleStop = () => {
    scrollerRef.current?.stop();
  };

  const handleStateChange = (state: "stopped" | "playing" | "paused") => {
    setPlayState(state);
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

      <div key={texts.length} className={styles.previewContainer}>
        <ScrollingText
          ref={scrollerRef}
          options={{
            interval,
            animationDuration,
            loop,
            ...animationConfig,
            onChange: onCurrentIndexChange,
            onStart: () => handleStateChange("playing"),
            onStop: () => handleStateChange("stopped"),
          }}
        >
          {texts}
        </ScrollingText>
      </div>

      <div className={styles.controls}>
        <button
          onClick={handleStart}
          className={`${styles.controlButton} ${
            playState === "playing" ? styles.controlButtonActive : ""
          }`}
        >
          ▶️ Start
        </button>
        <button
          onClick={handlePause}
          className={`${styles.controlButton} ${
            playState === "paused" ? styles.controlButtonActive : ""
          }`}
        >
          ⏸️ Pause
        </button>
        <button
          onClick={handleStop}
          className={`${styles.controlButton} ${
            playState === "stopped" ? styles.controlButtonActive : ""
          }`}
        >
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
