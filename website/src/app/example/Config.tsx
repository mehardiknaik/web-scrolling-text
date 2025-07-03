"use client";
import React, { useState, useTransition } from "react";
import { useSetConfig } from "./Context";

const pluginLoader = async (name: string) => {
  try {
    switch (name) {
      case "fade":
        return (await import("web-scrolling-text/modules/fade")).default;
      case "bounce":
        return (await import("web-scrolling-text/modules/bounce")).default;
      case "flip":
        return (await import("web-scrolling-text/modules/flip")).default;
      case "scaleIn":
        return (await import("web-scrolling-text/modules/scaleIn")).default;
      default:
        return null;
    }
  } catch {
    return null;
  }
};

const PLUGINS = [
  { name: "Default", value: "" },
  { name: "Fade", value: "fade" },
  { name: "Bounce", value: "bounce" },
  { name: "Flip", value: "flip" },
  { name: "Scale In", value: "scaleIn" },
];

const Config = () => {
  const [isPending, startTransition] = useTransition();
  const [interval, setInterval] = useState<number>(2000);
  const [animationDuration, setAnimationDuration] = useState<number>(1000);
  const [loop, setLoop] = useState<boolean>(true); // ✅ loop state

  const { setConfigValue } = useSetConfig();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      let intervalValue = parseInt(formData.get("interval") as string || "2000", 10);
      let durationValue = parseInt(formData.get("animationDuration") as string || "1000", 10);

      // Final validation
      if (intervalValue <= durationValue) {
        intervalValue = durationValue + 100;
      }

      const plugin = formData.get("plugin") as string;
      const module = await pluginLoader(plugin);

      setConfigValue(
        {
          interval: intervalValue,
          animationDuration: durationValue,
          loop,
        },
        module
      );
    });
  };

  // Sync logic
  const handleIntervalChange = (value: number) => {
    if (value <= animationDuration) {
      setAnimationDuration(value - 100);
    }
    setInterval(value);
  };

  const handleAnimationDurationChange = (value: number) => {
    if (value >= interval) {
      setInterval(value + 100);
    }
    setAnimationDuration(value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Config</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
        className="space-y-4"
      >
        {/* Plugin Selector */}
        <div>
          <label htmlFor="plugin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Plugin
          </label>
          <select
            name="plugin"
            id="plugin"
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            {PLUGINS.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Interval */}
        <div>
          <label htmlFor="interval" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Interval: <span className="text-blue-600 font-semibold">{interval}ms</span>
          </label>
          <input
            name="interval"
            id="interval"
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={interval}
            onChange={(e) => handleIntervalChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Animation Duration */}
        <div>
          <label htmlFor="animationDuration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Animation Duration: <span className="text-purple-600 font-semibold">{animationDuration}ms</span>
          </label>
          <input
            name="animationDuration"
            id="animationDuration"
            type="range"
            min="300"
            max="3000"
            step="100"
            value={animationDuration}
            onChange={(e) => handleAnimationDurationChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Loop Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            id="loop"
            name="loop"
            type="checkbox"
            checked={loop}
            onChange={(e) => setLoop(e.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="loop" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Loop animation
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isPending ? "Loading..." : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default Config;
