# Test Suite

Comprehensive test suite for web-scrolling-text library.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

### Core Tests (`core.test.ts`)
Tests for the main ScrollingText class:
- Constructor and initialization
- Control methods (start, pause, stop, dispose)
- Callbacks (onChange, onReachEnd, onStart, onStop)
- Looping behavior
- Timing and intervals
- Edge cases

### React Tests (`react.test.tsx`)
Tests for the React component:
- Component rendering
- Props and options
- Ref forwarding
- Context provider
- Lifecycle methods
- Edge cases

### Animation Tests (`animations.test.ts`)
Tests for all animation modules:
- Fade, Bounce, Flip, Rotate
- ScaleIn, ScaleOut, Hinge, ZoomInDown
- Animation structure consistency
- Unique animation names

### Type Tests (`types.test.ts`)
TypeScript type definition tests:
- TextType
- ConfigType
- MethodType
- OptionsType
- Type compatibility

## Coverage

The test suite aims for high code coverage across:
- Core functionality
- React components
- Animation modules
- Type definitions

View coverage report after running:
```bash
npm run test:coverage
open coverage/index.html
```

## Test Environment

- **Framework**: Jest
- **React Testing**: React Testing Library
- **Environment**: jsdom
- **TypeScript**: ts-jest

## Writing Tests

When adding new features, ensure you:
1. Write tests for new functionality
2. Maintain existing test coverage
3. Follow the existing test patterns
4. Use descriptive test names
5. Test edge cases and error scenarios
