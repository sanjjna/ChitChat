// src/store/useThemeStore.js
import { create } from "zustand";

const validThemes = ["light", "dark"];
const storedTheme = localStorage.getItem("chat-theme");
const defaultTheme = validThemes.includes(storedTheme) ? storedTheme : "light";

export const useThemeStore = create((set) => ({
  theme: defaultTheme,
  setTheme: (theme) => {
    if (validThemes.includes(theme)) {
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    }
  },
}));
