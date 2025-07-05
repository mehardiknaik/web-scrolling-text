"use client";
import React, { useState, useTransition } from "react";
import { useConfig } from "./Context";

const animationLoader = async (name: string) => {
  try {
    switch (name) {
      case "bounce":
        return (await import("web-scrolling-text/animation/bounce")).default;
      case "fade":
        return (await import("web-scrolling-text/animation/fade")).default;
      case "flip":
        return (await import("web-scrolling-text/animation/flip")).default;
      case "rotate":
        return (await import("web-scrolling-text/animation/rotate")).default;
      case "scaleIn":
        return (await import("web-scrolling-text/animation/scaleIn")).default;
      case "scaleOut":
        return (await import("web-scrolling-text/animation/scaleOut")).default;
      case "zoomInDown":
        return (await import("web-scrolling-text/animation/zoomInDown")).default;
      case "hinge":
        return (await import("web-scrolling-text/animation/hinge")).default;
      default:
        return { enterAnimation: "", exitAnimation: "" };
    }
  } catch {
    return { enterAnimation: "", exitAnimation: "" }; // Fallback if import fails
  }
};

const ANIMATIONS = [
  {
    name: "Default",
    value: "",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Fade",
    value: "fade",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Bounce",
    value: "bounce",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Flip",
    value: "flip",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Hinge",
    value: "hinge",
    exitAnimationSupport: true,
    enterAnimationSupport: false,
  },
  {
    name: "Rotate",
    value: "rotate",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Scale In",
    value: "scaleIn",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Scale Out",
    value: "scaleOut",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "Scale Out",
    value: "scaleOut",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
  {
    name: "zoom In Down",
    value: "zoomInDown",
    exitAnimationSupport: true,
    enterAnimationSupport: true,
  },
];

const Config = () => {
  const [isPending, startTransition] = useTransition();
  const [interval, setInterval] = useState<number>(3000);
  const [animationDuration, setAnimationDuration] = useState<number>(1000);
  const [loop, setLoop] = useState<boolean>(true); // ✅ loop state

  const { setConfig } = useConfig();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      let intervalValue = parseInt(
        (formData.get("interval") as string) || "2000",
        10
      );
      let durationValue = parseInt(
        (formData.get("animationDuration") as string) || "1000",
        10
      );

      // Final validation
      if (intervalValue <= durationValue) {
        intervalValue = durationValue + 100;
      }

      const enterVal = formData.get("enterAnimation") as string;
      const exitVal = formData.get("exitAnimation") as string;
      const [{ enterAnimation }, { exitAnimation }] = await Promise.all([
        animationLoader(enterVal),
        animationLoader(exitVal),
      ]);

      setConfig({
        interval: intervalValue,
        animationDuration: durationValue,
        enterAnimation,
        exitAnimation,
      });
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
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Config
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
        className="space-y-4 divide-y divide-gray-400"
      >
        {/* Enter Animation Selector */}
        <div className="pb-4">
          <div>
            <label
              htmlFor="enterAnimation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Enter Animation
            </label>
            <select
              name="enterAnimation"
              id="enterAnimation"
              className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              {ANIMATIONS.map(({ name, value, enterAnimationSupport }) =>
                enterAnimationSupport ? (
                  <option key={value} value={value}>
                    {name}
                  </option>
                ) : null
              )}
            </select>
          </div>

          {/* Exit Animation Selector */}
          <div>
            <label
              htmlFor="exitAnimation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Exit Animation
            </label>
            <select
              name="exitAnimation"
              id="exitAnimation"
              className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              {ANIMATIONS.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Interval */}
        <div className="pb-4">
          <div>
            <label
              htmlFor="interval"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Interval:{" "}
              <span className="text-blue-600 font-semibold">{interval}ms</span>
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
            <label
              htmlFor="animationDuration"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Animation Duration:{" "}
              <span className="text-purple-600 font-semibold">
                {animationDuration}ms
              </span>
            </label>
            <input
              name="animationDuration"
              id="animationDuration"
              type="range"
              min="300"
              max="3000"
              step="100"
              value={animationDuration}
              onChange={(e) =>
                handleAnimationDurationChange(Number(e.target.value))
              }
              className="w-full"
            />
          </div>
        </div>
        {/* Loop Checkbox */}
        <div className="flex items-center space-x-2 pb-4">
          <input
            id="loop"
            name="loop"
            type="checkbox"
            checked={loop}
            onChange={(e) => setLoop(e.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="loop"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
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
