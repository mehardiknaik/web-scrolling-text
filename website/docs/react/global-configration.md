---
sidebar_position: 4
---

# Global Configration

```tsx title="index.tsx"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// highlight-next-line
import { ScrollingTextProvider } from "web-scrolling-text/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // highlight-start
  <ScrollingTextProvider
    options={{
      interval: 3000,
      animationDuration: 1000,
      loop: true,
      enterAnimation: "fadeIn",
      exitAnimation: "fadeOut",
    }}
  >
    // highlight-end
    <App />
    // highlight-next-line
  </ScrollingTextProvider>
);
```

```css title="index.css"
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

:::info

You can use predefined **Animations**, Check [this](/docs/react/animations#with-global-configration).

:::
