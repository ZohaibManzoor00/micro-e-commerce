"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, themes, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button
        // size='small'
        type="button"
        className="text-destructive inline-flex w-fit min-w-[95px] items-center justify-between gap-3"
        id="options-menu"
        aria-expanded={isOpen}
        onClick={() => {}}
      >
        <span className="ml-2">Theme</span>
        {/* <FiSun /> */}
      </button>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        // size='small'
        type="button"
        className="text-destructive inline-flex w-full min-w-[95px] items-center justify-between gap-3"
        id="options-menu"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span className="ml-2">Theme</span>
        {/* <FiSun /> */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map((themeItem) => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                    themeItem === theme
                      ? "bg-selected text-primary hover:bg-selected"
                      : "text-secondary"
                  }`}
                >
                  {themeItem}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
