# Playground Component

A comprehensive, interactive playground for the web-scrolling-text library that allows users to configure and test all available options and animations.

## Structure

### Components

- **`index.tsx`** - Main playground component that orchestrates all sub-components
- **`ConfigPanel.tsx`** - Configuration panel for adjusting animation settings
- **`TextEditor.tsx`** - Text editor for adding/removing text items
- **`PreviewPanel.tsx`** - Live preview with playback controls
- **`CodeGenerator.tsx`** - Generates code snippets for React and Vanilla JS
- **`Playground.module.css`** - Styles for all playground components

## Features

### 1. Configuration Panel
- **Interval**: Adjust time between text changes (500-10000ms)
- **Animation Duration**: Control animation speed (100-3000ms)
- **Animation Style**: Select from available animations:
  - None (Default)
  - Fade
  - Bounce
  - Flip
  - Rotate
  - Scale In
  - Scale Out
  - Hinge
  - Zoom In Down
- **Loop**: Toggle looping behavior

### 2. Text Editor
- Add new text items
- Remove existing items
- Visual list with numbered items
- Real-time updates to preview

### 3. Preview Panel
- Live preview of scrolling text with current settings
- Playback controls:
  - Start
  - Pause
  - Stop
- Current index indicator

### 4. Code Generator
- Generates ready-to-use code snippets
- Supports both React and Vanilla JS
- One-click copy to clipboard
- Includes all configured options and animations

## Usage

The playground is automatically available at `/playground` route in the website.

```tsx
import PlaygroundComponent from '@site/src/components/Playground';

function Page() {
  return <PlaygroundComponent />;
}
```

## Animations

All animations are dynamically imported from the `web-scrolling-text/animation/*` modules:

- `fade` - Fade in/out effect
- `bounce` - Bounce animation
- `flip` - Flip transition
- `rotate` - Rotation effect
- `scaleIn` - Scale in animation
- `scaleOut` - Scale out animation
- `hinge` - Hinge effect
- `zoomInDown` - Zoom in from top

## Responsive Design

- Desktop: Two-column grid layout
- Mobile: Single-column stack layout
- All components adapt to screen size
