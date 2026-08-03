import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function ChatLauncher() {
  return (
    <Link
      to="/chat"
      aria-label="Open the AI insulation assistant"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Ask our AI assistant</span>
    </Link>
  );
}
