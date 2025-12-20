import React from 'react';
import ConfigPanel from './ConfigPanel';
import TextEditor from './TextEditor';
import PreviewPanel from './PreviewPanel';
import CodeGenerator from './CodeGenerator';
import { getAnimationConfig } from './animations';
import styles from './Playground.module.css';

const PlaygroundComponent: React.FC = () => {
  const [texts, setTexts] = React.useState<string[]>([
    'Hello World',
    'Welcome to Web Scrolling Text',
    'Customize Your Animation',
    '🎨 Beautiful Animations',
  ]);
  const [interval, setInterval] = React.useState(3000);
  const [animationDuration, setAnimationDuration] = React.useState(1000);
  const [loop, setLoop] = React.useState(true);
  const [enterAnimation, setEnterAnimation] = React.useState('none');
  const [exitAnimation, setExitAnimation] = React.useState('none');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [animationConfig, setAnimationConfig] = React.useState({});

  // Get animation config based on selected enter and exit animations
  React.useEffect(() => {
    let mounted = true;

    const loadConfig = async () => {
      console.log('Loading animation config...');
      const config = await getAnimationConfig(enterAnimation, exitAnimation);
      if (mounted) {
        console.log('Setting animation config:', config);
        setAnimationConfig(config);
      }
    };

    loadConfig();

    return () => {
      mounted = false;
    };
  }, [enterAnimation, exitAnimation]);

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.playgroundGrid}>
        <ConfigPanel
          interval={interval}
          animationDuration={animationDuration}
          loop={loop}
          enterAnimation={enterAnimation}
          exitAnimation={exitAnimation}
          onIntervalChange={setInterval}
          onAnimationDurationChange={setAnimationDuration}
          onLoopChange={setLoop}
          onEnterAnimationChange={setEnterAnimation}
          onExitAnimationChange={setExitAnimation}
        />

        <TextEditor
          texts={texts}
          onTextsChange={setTexts}
        />

        <PreviewPanel
          texts={texts}
          interval={interval}
          animationDuration={animationDuration}
          loop={loop}
          animationConfig={animationConfig}
          currentIndex={currentIndex}
          onCurrentIndexChange={setCurrentIndex}
        />

        <CodeGenerator
          texts={texts}
          interval={interval}
          animationDuration={animationDuration}
          loop={loop}
          enterAnimation={enterAnimation}
          exitAnimation={exitAnimation}
        />
      </div>
    </div>
  );
};

export default PlaygroundComponent;
