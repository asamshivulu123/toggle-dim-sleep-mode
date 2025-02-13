
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const DimToggle = () => {
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    if (isDimmed) {
      document.body.classList.add("dimmed");
    } else {
      document.body.classList.remove("dimmed");
    }
  }, [isDimmed]);

  return (
    <button
      onClick={() => setIsDimmed(!isDimmed)}
      className={cn(
        "fixed top-6 right-6 p-2 rounded-full transition-all duration-300",
        "bg-white/10 backdrop-blur-lg border border-white/20",
        "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20",
        isDimmed && "bg-white/5"
      )}
      aria-label="Toggle dim mode"
    >
      {isDimmed ? (
        <Sun className="w-5 h-5 text-white/80" />
      ) : (
        <Moon className="w-5 h-5 text-white/80" />
      )}
    </button>
  );
};
