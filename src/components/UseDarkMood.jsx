import React, { useEffect, useState } from "react";

const UseDarkMood = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </>
  );
};

export default UseDarkMood;
