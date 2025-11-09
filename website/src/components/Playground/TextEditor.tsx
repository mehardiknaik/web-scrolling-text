import React from 'react';
import styles from './Playground.module.css';

interface TextEditorProps {
  texts: string[];
  onTextsChange: (texts: string[]) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ texts, onTextsChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleAddText = () => {
    if (inputValue.trim()) {
      onTextsChange([...texts, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveText = (index: number) => {
    onTextsChange(texts.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddText();
    }
  };

  return (
    <div className={styles.textEditor}>
      <h3>📝 Text Items</h3>
      
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new text..."
          className={styles.textInput}
        />
        <button onClick={handleAddText} className={styles.addButton}>
          Add
        </button>
      </div>

      <div className={styles.textList}>
        {texts.map((text, index) => (
          <div key={index} className={styles.textItem}>
            <span className={styles.textIndex}>{index + 1}</span>
            <span className={styles.textContent}>{text}</span>
            <button
              onClick={() => handleRemoveText(index)}
              className={styles.removeButton}
              aria-label="Remove text"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {texts.length === 0 && (
        <div className={styles.emptyState}>
          No text items. Add some text to see the animation!
        </div>
      )}
    </div>
  );
};

export default TextEditor;
