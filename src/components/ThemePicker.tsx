"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";

export type Theme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
  textGradient: {
    from: string;
    to: string;
  };
};

const themes: Theme[] = [
  {
    id: "blue",
    name: "Blue",
    primary: "#3B82F6", // blue-500
    secondary: "#1E40AF", // blue-800
    accent: "#60A5FA", // blue-400
    gradient: {
      from: "#0f172a", // slate-900
      via: "#1e3a8a", // blue-900
      to: "#111827", // gray-900
    },
    textGradient: {
      from: "#60A5FA", // blue-400
      to: "#4F46E5", // indigo-600
    }
  },
  {
    id: "purple",
    name: "Purple",
    primary: "#8B5CF6", // violet-500
    secondary: "#5B21B6", // violet-800
    accent: "#A78BFA", // violet-400
    gradient: {
      from: "#18181b", // zinc-900
      via: "#4c1d95", // violet-900
      to: "#1f1937", // slate-900
    },
    textGradient: {
      from: "#A78BFA", // violet-400
      to: "#EC4899", // pink-500
    }
  },
  {
    id: "emerald",
    name: "Emerald",
    primary: "#10B981", // emerald-500
    secondary: "#065F46", // emerald-800
    accent: "#34D399", // emerald-400
    gradient: {
      from: "#064e3b", // emerald-900
      via: "#0f766e", // teal-800
      to: "#1e3a8a", // blue-900
    },
    textGradient: {
      from: "#34D399", // emerald-400
      to: "#3B82F6", // blue-500
    }
  },
  {
    id: "orange",
    name: "Sunset",
    primary: "#F59E0B", // amber-500
    secondary: "#B45309", // amber-800
    accent: "#FBBF24", // amber-400
    gradient: {
      from: "#7c2d12", // orange-900
      via: "#b45309", // amber-800
      to: "#1e3a8a", // blue-900
    },
    textGradient: {
      from: "#F59E0B", // amber-500
      to: "#EF4444", // red-500
    }
  },
  {
    id: "midnight",
    name: "Midnight",
    primary: "#6366F1", // indigo-500
    secondary: "#312E81", // indigo-900
    accent: "#818CF8", // indigo-400
    gradient: {
      from: "#0f172a", // slate-900
      via: "#1e1b4b", // indigo-950
      to: "#0c0a1d", // darker
    },
    textGradient: {
      from: "#818CF8", // indigo-400
      to: "#C084FC", // purple-400
    }
  },
  {
    id: "rose",
    name: "Rose",
    primary: "#EC4899", // pink-500
    secondary: "#9D174D", // pink-800
    accent: "#F472B6", // pink-400
    gradient: {
      from: "#881337", // rose-900
      via: "#9d174d", // pink-800
      to: "#4a044e", // fuchsia-950
    },
    textGradient: {
      from: "#F472B6", // pink-400
      to: "#8B5CF6", // violet-500
    }
  }
];

interface ThemePickerProps {
  onThemeChange: (theme: Theme) => void;
  currentThemeId: string;
}

const ThemePicker: React.FC<ThemePickerProps> = ({ onThemeChange, currentThemeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Set the initial selected theme based on currentThemeId
    setSelectedTheme(themes.find(theme => theme.id === currentThemeId) || themes[0]);
    
    // Save theme preference
    if (currentThemeId) {
      localStorage.setItem('themePreference', currentThemeId);
    }
  }, [currentThemeId]);

  const handleThemeChange = (theme: Theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
    setIsOpen(false);
    localStorage.setItem('themePreference', theme.id);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white`}
        style={{ backgroundColor: selectedTheme?.primary || themes[0].primary }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPalette size={20} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64"
        >
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Choose Theme</h3>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => (
              <motion.button
                key={theme.id}
                className={`p-2 rounded-lg relative ${
                  selectedTheme?.id === theme.id 
                    ? `ring-2 ring-offset-2 ring-[${theme.primary}]` 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                style={{ 
                  backgroundColor: `rgba(${parseInt(theme.gradient.from.slice(1, 3), 16)}, ${parseInt(theme.gradient.from.slice(3, 5), 16)}, ${parseInt(theme.gradient.from.slice(5, 7), 16)}, 0.1)`,
                }}
                onClick={() => handleThemeChange(theme)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-12 rounded-md overflow-hidden mb-1">
                  <div 
                    className="w-full h-full"
                    style={{ 
                      background: `linear-gradient(to bottom right, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})` 
                    }}
                  />
                </div>
                <span className="text-xs block text-center dark:text-white truncate">
                  {theme.name}
                </span>
                {selectedTheme?.id === theme.id && (
                  <motion.div 
                    className="absolute -top-1 -right-1 w-4 h-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemePicker;
export { themes }; 