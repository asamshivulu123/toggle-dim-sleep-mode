
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const DimToggle = () => {
  const [isDimmed, setIsDimmed] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "1234"; // In a real app, this should be user-configurable

  useEffect(() => {
    if (isDimmed) {
      document.body.classList.add("dimmed");
    } else {
      document.body.classList.remove("dimmed");
    }
  }, [isDimmed]);

  const handleToggle = () => {
    if (!isDimmed) {
      // Turning dim mode on doesn't require password
      setIsDimmed(true);
      setShowPasswordInput(false);
    } else {
      // Show password input when trying to turn off dim mode
      setShowPasswordInput(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsDimmed(false);
      setShowPasswordInput(false);
      setPassword("");
      toast.success("Dim mode disabled");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="fixed top-6 right-6 flex items-center gap-2">
      {showPasswordInput && (
        <form onSubmit={handlePasswordSubmit} className="animate-in slide-in-from-right">
          <div className="glass-effect p-2 rounded-full flex items-center gap-2">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="h-9 w-40 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
              autoFocus
            />
          </div>
        </form>
      )}
      <button
        onClick={handleToggle}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
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
    </div>
  );
};
