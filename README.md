# web-scrolling-text



https://github.com/user-attachments/assets/87e55d25-2435-4ca6-aaad-ef0fb9d378d7



<p>
  <a href="https://mehardiknaik.github.io/web-scrolling-text/">Demo
  </a>
</p>

## Install

```bash
npm i web-scrolling-text
```

## Usage

### Vanilla Javascript

```html
<body>
  <div id="scrollWrapper"></div>
  <!-- the src of the bundle -->
  <script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
  <script>
    const strings = ["Welcome", "How Are You!"];
    const scrollContainer = document.getElementById("scrollWrapper");
    const options={}
    const scroller = new ScrollingText(scrollContainer, strings, options);
    scroller.start();
  </script>
</body>
```

### React

```tsx
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

const App = () => {
  const ref = React.useRef<ScrollingType>(null);
  return (
    <ScrollingText ref={ref} options={{
      // options comes here
    }}>
      <div>Hey</div>
      How Are You !<>Good Morning</>
      {["Welcome Back", "Loren Ipsum"]}
    </ScrollingText>
  );
};

export default App;
```

### Next Js

#### for nextjs the first element is render on server side

```tsx
"use client";
import React from "react";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

const App = () => {
  return (
    <ScrollingText options={{
      // options comes here
    }}>
      <div>Hey</div>
      <div>Hello</div>
      <div>From</div>
      <div>NextJs</div>
    </ScrollingText>
  );
};

export default App;
```

### React Global Config

```tsx
import React from "react";
import ScrollingText, { ScrollingTextProvider } from "web-scrolling-text/react";
import { ScrollingType } from "web-scrolling-text";

const App = ({children}) => {
  const ref = React.useRef<ScrollingType>(null);
  return (
    <ScrollingTextProvider options={{
      // options comes here
    }}>
      {children}
    </ScrollingTextProvider>
  );
};

export default App;
```

## Options details

| Parameter           |          Type           | Required | Defaults | Description                                                                                               |
| ------------------- | :---------------------: | :------: | :------: | --------------------------------------------------------------------------------------------------------- |
| `interval`          |         Number          |    no    |  `3000`  | The interval between each text change.                                                                    |
| `animationDuration` |         Number          |    no    |  `1000`  | The duration of the animation.                                                                            |
| `enterAnimation`    |         String          |    no    |    -     | The animation to be used when the text enters the screen (The animation should be a valid CSS animation). |
| `exitAnimation`     |         String          |    no    |    -     | The animation to be used when the text exits the screen (The animation should be a valid CSS animation).  |
| `loop`              |         Boolean         |    no    |  `true`  | Continues scrolling animation after reach end.                                                            |
| `onStart`           |       () => void        |    no    |    -     | Callback when the text starts scrolling.                                                                  |
| `onStop`            |       () => void        |    no    |    -     | Callback when the text stops scrolling.                                                                   |
| `onReachEnd`        |       () => void        |    no    |    -     | Callback when the text reaches the end.                                                                   |
| `onChange`          | (index: number) => void |    no    |    -     | Callback when the text changes.                                                                           |

## To get a current version

```jsx
import ScrollingText from "web-scrolling-text";
ScrollingText.version //this will gives you the current library version
```


## Method details

## License

MIT © [Hardik Naik](https://github.com/mehardiknaik)
